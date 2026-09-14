'use client';

import { PageHeader, Panel, StatusChip } from '@/components/ui';

export default function KillSwitchPage() {
  return (
    <div>
      <PageHeader
        title="Kill-switch console"
        subtitle="Registered exit chute with BCP, drill cadence, and accountable executor — no vendor dependency (BR-6)."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Configuration">
          <p className="text-sm text-steel">
            Select a use case to register executable role, BCP reference, and
            remediation protocol.
          </p>
        </Panel>
        <Panel title="Drill cadence">
          <StatusChip tone="approaching" label="Overdue inflates residual" />
          <p className="mt-3 text-sm text-steel">
            Time-to-halt is logged on every drill. Overdue drills flag
            supervisory packs.
          </p>
        </Panel>
        <Panel title="Live execute">
          <p className="text-sm text-steel">
            Execution is accepted asynchronously (202) and must not depend on a
            model vendor remaining reachable.
          </p>
        </Panel>
      </div>
    </div>
  );
}
