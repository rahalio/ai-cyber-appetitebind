'use client';

import { PageHeader, Panel } from '@/components/ui';

export default function HandToHumanPage() {
  return (
    <div>
      <PageHeader
        title="Hand to human"
        subtitle="Governed exit when confidence or risk sits outside tolerance. Volume is an operational control, not a UX flourish (BR-5)."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Rule thresholds">
          <p className="text-sm text-steel">
            Open a use case workspace to set destination roles (e.g. human
            underwriter) and activation conditions.
          </p>
        </Panel>
        <Panel title="Handoff volume">
          <p className="text-sm text-steel">
            Spikes feed breach forecasts. Empty meter until monitoring ingest is
            live.
          </p>
        </Panel>
      </div>
    </div>
  );
}
