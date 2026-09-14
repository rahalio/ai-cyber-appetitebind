'use client';

import Link from 'next/link';
import { PageHeader, Panel, StatusChip, HeadroomBar, PrimaryButton } from '@/components/ui';
import { useListUseCases } from '@/services/domains/usecases';
import { useGetBreach } from '@/services/domains/predictions';
import { asItems, field, formatProblem } from '@/services/shared/http';

function bindingTone(status: string): 'bound' | 'approaching' | 'breached' | 'steel' {
  if (status === 'production' || status === 'approved') return 'bound';
  if (status === 'assessing' || status === 'proposed') return 'approaching';
  if (status === 'suspended') return 'breached';
  return 'steel';
}

export default function InventoryPage() {
  const cases = useListUseCases();
  const predictions = useGetBreach({ status: 'open' });
  const items = asItems(cases.data);
  const forecasts = asItems(predictions.data);

  return (
    <div>
      <PageHeader
        title="AI inventory"
        subtitle="Single book of applications with owners, residual risk, binding status, and kill-drill posture. Predicted breaches sit on the rail before pack lock."
        actions={
          <Link href="/inventory/new">
            <PrimaryButton type="button">Register use case</PrimaryButton>
          </Link>
        }
      />
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <StatusChip tone="steel" label={`${items.length} cases`} />
        <StatusChip tone="approaching" label={`${forecasts.length} open forecasts`} />
        <span className="ml-auto font-mono text-[11px] text-steel">
          Last pack lock — awaiting snapshot
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <Panel title="Portfolio">
          {cases.isError ? (
            <p className="text-sm text-breach">{formatProblem(cases.error)}</p>
          ) : cases.isLoading ? (
            <p className="text-sm text-steel">Loading inventory…</p>
          ) : items.length === 0 ? (
            <p className="text-sm text-steel">
              Empty book. Register the first use case — production traffic stays
              blocked until it is bound.
            </p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="text-[11px] uppercase tracking-wide text-steel">
                <tr>
                  <th className="py-2 font-medium">Use case</th>
                  <th className="py-2 font-medium">Owner</th>
                  <th className="py-2 font-medium">State</th>
                  <th className="py-2 font-medium">Headroom</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => {
                  const id = field(row, 'useCaseId', 'id');
                  const learning = Boolean(row.continuousLearning);
                  return (
                    <tr key={id} className="border-t border-rule">
                      <td className="py-3">
                        <Link href={`/inventory/${id}`} className="font-medium text-ink hover:text-bind">
                          {field(row, 'name')}
                        </Link>
                        <div className="font-mono text-[11px] text-steel">{id}</div>
                        {learning ? (
                          <span className="learn-pulse mt-1 inline-block text-[11px] text-learn">
                            Continuous learning
                          </span>
                        ) : null}
                      </td>
                      <td className="py-3 font-mono text-xs text-steel">
                        {field(row, 'ownerId')}
                      </td>
                      <td className="py-3">
                        <StatusChip
                          tone={bindingTone(field(row, 'status'))}
                          label={field(row, 'status')}
                        />
                      </td>
                      <td className="py-3 w-36">
                        <HeadroomBar value={field(row, 'status') === 'production' ? 72 : 38} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel title="Predicted breaches">
            {forecasts.length === 0 ? (
              <p className="text-sm text-steel">Within limits. Last forecast idle.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {forecasts.slice(0, 6).map((p) => (
                  <li key={field(p, 'predictionId', 'id')} className="border-b border-rule pb-2">
                    <StatusChip tone="approaching" label={field(p, 'predictedBreachType', 'status')} />
                    <p className="mt-1 font-mono text-[11px] text-steel">
                      {field(p, 'useCaseId')}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            <Link href="/predictions" className="mt-3 inline-block text-sm font-semibold text-bind">
              Open board →
            </Link>
          </Panel>
          <Panel title="Concentration">
            <p className="text-sm text-steel">
              Third-party / black-box flags surface here (BR-11). Empty until
              inventory is populated.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  );
}
