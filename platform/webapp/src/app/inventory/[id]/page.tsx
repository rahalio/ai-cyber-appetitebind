'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PageHeader, Panel, StatusChip, SecondaryButton } from '@/components/ui';
import { usecasesService } from '@/services/domains/usecases';
import { useTenantQuery } from '@/services/shared/infrastructure';
import { field, formatProblem } from '@/services/shared/http';
import { unwrapDataEnvelope } from '@/services/shared/contracts';

export default function UseCaseWorkspacePage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const detail = useTenantQuery(['usecases', 'get', id], async (_org, signal) => {
    return usecasesService.getUseCase(id, undefined, signal);
  });
  const raw = detail.data ? unwrapDataEnvelope(detail.data as never) : {};
  const row = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;

  return (
    <div>
      <PageHeader
        title={field(row, 'name') === '—' ? 'Use case workspace' : field(row, 'name')}
        subtitle="Lifecycle, criteria, owners, and gate status. Missing owner blocks advance (BR-9)."
      />
      {detail.isError ? (
        <p className="text-sm text-breach">{formatProblem(detail.error)}</p>
      ) : null}
      <div className="mb-4 flex flex-wrap gap-2">
        <StatusChip tone="steel" label={field(row, 'status')} />
        {row.continuousLearning ? (
          <StatusChip tone="learn" label="Continuous learning" />
        ) : (
          <StatusChip tone="steel" label="Static" />
        )}
        <span className="font-mono text-[11px] text-steel">{id}</span>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Owner">
          <p className="font-mono text-sm">{field(row, 'ownerId')}</p>
          <p className="mt-2 text-xs text-steel">
            Named accountable owner required before binding.
          </p>
        </Panel>
        <Panel title="Gates">
          <ul className="space-y-2 text-sm">
            <li>
              Appetite <StatusChip tone="approaching" label="Unbound" />
            </li>
            <li>
              Fairness <StatusChip tone="steel" label="Pending" />
            </li>
            <li>
              Kill-switch <StatusChip tone="steel" label="Unregistered" />
            </li>
          </ul>
        </Panel>
        <Panel title="Three-lines">
          <p className="text-sm text-steel">
            Sandbox / go-live / re-validation evidence appears after assessments
            sign-off.
          </p>
        </Panel>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={`/binding?useCaseId=${id}`}>
          <SecondaryButton type="button">Submit for binding</SecondaryButton>
        </Link>
        <Link href={`/monitoring?useCaseId=${id}`}>
          <SecondaryButton type="button">Open monitoring</SecondaryButton>
        </Link>
      </div>
    </div>
  );
}
