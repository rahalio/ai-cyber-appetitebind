'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';
import { useListMetrics } from '@/services/domains/monitoring';
import { asItems, field, formatProblem } from '@/services/shared/http';

export default function MonitoringPage() {
  const metrics = useListMetrics();
  const items = asItems(metrics.data);

  return (
    <div>
      <PageHeader
        title="Monitoring hub"
        subtitle="Technical, business, operational, complaint, and data-shift signals in one book (BR-7)."
      />
      <div className="mb-4 flex flex-wrap gap-2">
        {['technical', 'business', 'operational', 'complaint', 'data_shift'].map((c) => (
          <StatusChip key={c} tone="steel" label={c.replace('_', ' ')} />
        ))}
      </div>
      <Panel title="Recent metrics">
        {metrics.isError ? (
          <p className="text-sm text-breach">{formatProblem(metrics.error)}</p>
        ) : metrics.isLoading ? (
          <p className="text-sm text-steel">Loading metrics…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-steel">
            Missing feed = coverage gap on monitoring completeness. Ingest via
            MLOps API key.
          </p>
        ) : (
          <ul className="divide-y divide-rule">
            {items.slice(0, 20).map((row) => (
              <li key={field(row, 'metricId', 'id')} className="flex justify-between py-2 text-sm">
                <span>{field(row, 'name')}</span>
                <span className="font-mono text-xs text-steel">
                  {field(row, 'category')} · {field(row, 'value')}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
