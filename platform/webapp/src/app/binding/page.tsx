'use client';

import { PageHeader, Panel, StatusChip, PrimaryButton } from '@/components/ui';
import { useGetAppetiteCriterium } from '@/services/domains/appetite';
import { formatProblem } from '@/services/shared/http';

export default function BindingPage() {
  const criteria = useGetAppetiteCriterium();
  const data = (criteria.data as { data?: { version?: string; questions?: unknown[] } })?.data;

  return (
    <div>
      <PageHeader
        title="Appetite binding"
        subtitle="Recorded bind/refuse against standard criteria before production traffic (BR-1)."
        actions={<PrimaryButton type="button">Bind</PrimaryButton>}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Firm criteria">
          {criteria.isError ? (
            <p className="text-sm text-breach">{formatProblem(criteria.error)}</p>
          ) : criteria.isLoading ? (
            <p className="text-sm text-steel">Loading criteria…</p>
          ) : (
            <>
              <StatusChip tone="steel" label={`version ${data?.version ?? '—'}`} />
              <p className="mt-3 text-sm text-steel">
                {(data?.questions?.length ?? 0) || 0} question(s). Attempted enable
                without a current binding is a hard block with audit.
              </p>
            </>
          )}
        </Panel>
        <Panel title="Portfolio consumption">
          <p className="text-sm text-steel">
            Appetite headroom at firm level. Conditional bindings occupy dim teal;
            outside-appetite refuses stay copper until retired.
          </p>
        </Panel>
      </div>
    </div>
  );
}
