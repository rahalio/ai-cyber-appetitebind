'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';
import { useGetFairnessPolicy } from '@/services/domains/fairness';
import { formatProblem } from '@/services/shared/http';

export default function FairnessPage() {
  const policy = useGetFairnessPolicy();
  const data = (policy.data as { data?: { version?: string; thresholds?: unknown[] } })?.data;

  return (
    <div>
      <PageHeader
        title="Fairness policy"
        subtitle="Measurable thresholds. Customer-facing go-live is blocked without a passing assessment (BR-2)."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Policy thresholds">
          {policy.isError ? (
            <p className="text-sm text-breach">{formatProblem(policy.error)}</p>
          ) : policy.isLoading ? (
            <p className="text-sm text-steel">Loading policy…</p>
          ) : !data ? (
            <p className="text-sm text-breach">
              No firm policy — all customer-facing go-lives blocked.
            </p>
          ) : (
            <>
              <StatusChip tone="bound" label={`v${data.version ?? '—'}`} />
              <p className="mt-3 text-sm text-steel">
                {data.thresholds?.length ?? 0} measurable limit(s). Segment tables and
                complaint linkage live on the case assessment.
              </p>
            </>
          )}
        </Panel>
        <Panel title="Assessment gate">
          <p className="text-sm text-steel">
            Pass / conditional / fail. Vulnerable-customer consideration is
            required. Fail opens the edge-case review queue — never a PDF
            principles pack.
          </p>
        </Panel>
      </div>
    </div>
  );
}
