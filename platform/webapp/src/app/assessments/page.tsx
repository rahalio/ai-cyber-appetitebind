'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';
import { useGetAssessment } from '@/services/domains/assessments';
import { asItems, field, formatProblem } from '@/services/shared/http';

export default function AssessmentsPage() {
  const list = useGetAssessment();
  const items = asItems(list.data);

  return (
    <div>
      <PageHeader
        title="Assessment workspace"
        subtitle="Reference-model comparison, technical/business/operational parameters, and three-lines sign-off (BR-4, BR-12)."
      />
      <Panel title="Assessments">
        {list.isError ? (
          <p className="text-sm text-breach">{formatProblem(list.error)}</p>
        ) : list.isLoading ? (
          <p className="text-sm text-steel">Loading assessments…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-steel">
            No assessments yet. Record variance rationale before go-live.
          </p>
        ) : (
          <ul className="divide-y divide-rule">
            {items.map((row) => (
              <li key={field(row, 'assessmentId', 'id')} className="flex items-center justify-between py-3 text-sm">
                <span className="font-mono text-xs">{field(row, 'assessmentId', 'id')}</span>
                <StatusChip tone="steel" label={field(row, 'status')} />
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
