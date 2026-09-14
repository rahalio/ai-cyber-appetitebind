'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';
import { useListControlTests } from '@/services/domains/controls';
import { asItems, field, formatProblem } from '@/services/shared/http';

export default function ControlsPage() {
  const tests = useListControlTests();
  const items = asItems(tests.data);

  return (
    <div>
      <PageHeader
        title="Control tests"
        subtitle="Out-of-sample, stress, and journey tests on a cadence scaled to learning rate (BR-5)."
      />
      <Panel title="Schedule">
        {tests.isError ? (
          <p className="text-sm text-breach">{formatProblem(tests.error)}</p>
        ) : tests.isLoading ? (
          <p className="text-sm text-steel">Loading tests…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-steel">
            No tests scheduled. Overdue tests degrade go-live and monitoring.
          </p>
        ) : (
          <ul className="divide-y divide-rule">
            {items.map((row) => (
              <li key={field(row, 'testId', 'id')} className="flex items-center justify-between py-3 text-sm">
                <span>{field(row, 'testType')}</span>
                <StatusChip
                  tone={field(row, 'status') === 'failed' ? 'breached' : 'bound'}
                  label={field(row, 'status')}
                />
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
