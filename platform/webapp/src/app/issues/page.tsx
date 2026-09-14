'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';
import { useListIssues } from '@/services/domains/governance';
import { asItems, field, formatProblem } from '@/services/shared/http';

export default function IssuesPage() {
  const issues = useListIssues();
  const items = asItems(issues.data);

  return (
    <div>
      <PageHeader
        title="Issues and variations"
        subtitle="Auditable defects and who-changed-what for continuous learning (BR-10)."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Issue queue">
          {issues.isError ? (
            <p className="text-sm text-breach">{formatProblem(issues.error)}</p>
          ) : issues.isLoading ? (
            <p className="text-sm text-steel">Loading issues…</p>
          ) : items.length === 0 ? (
            <p className="text-sm text-steel">No open issues. Failed tests open items here.</p>
          ) : (
            <ul className="divide-y divide-rule">
              {items.map((row) => (
                <li key={field(row, 'issueId', 'id')} className="flex items-center justify-between py-3 text-sm">
                  <span>{field(row, 'title')}</span>
                  <StatusChip
                    tone={field(row, 'severity') === 'critical' ? 'breached' : 'approaching'}
                    label={field(row, 'status')}
                  />
                </li>
              ))}
            </ul>
          )}
        </Panel>
        <Panel title="Algorithm variation log">
          <p className="text-sm text-steel">
            Unapproved variation in production is a kill-candidate banner. Record
            version-from / version-to on the use case.
          </p>
        </Panel>
      </div>
    </div>
  );
}
