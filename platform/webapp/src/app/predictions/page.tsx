'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';
import { useGetBreach } from '@/services/domains/predictions';
import { asItems, field, formatProblem } from '@/services/shared/http';

export default function PredictionsPage() {
  const list = useGetBreach();
  const items = asItems(list.data);

  return (
    <div>
      <PageHeader
        title="Breach prediction board"
        subtitle="Forecast appetite and fairness threshold breaches before the board pack locks (BR-8)."
      />
      <Panel title="Open forecasts">
        {list.isError ? (
          <p className="text-sm text-breach">{formatProblem(list.error)}</p>
        ) : list.isLoading ? (
          <p className="text-sm text-steel">Loading forecasts…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-steel">Within limits. Last forecast time idle.</p>
        ) : (
          <ul className="divide-y divide-rule">
            {items.map((row) => (
              <li key={field(row, 'predictionId', 'id')} className="py-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs">{field(row, 'useCaseId')}</span>
                  <StatusChip tone="approaching" label={field(row, 'predictedBreachType')} />
                </div>
                <p className="mt-1 text-sm text-steel">
                  {field(row, 'status')} · leading indicators before pack lock
                </p>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
