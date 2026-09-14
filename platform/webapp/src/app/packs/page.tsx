'use client';

import { PageHeader, Panel, StatusChip, PrimaryButton } from '@/components/ui';
import { useCreateSupervisoryExport } from '@/services/domains/governance';

export default function PacksPage() {
  const exportPack = useCreateSupervisoryExport();

  return (
    <div>
      <PageHeader
        title="Board and supervisory packs"
        subtitle="Residual-risk trajectories and sealed evidence — not initiative lists (BR-8, BR-10)."
        actions={
          <PrimaryButton
            type="button"
            disabled={exportPack.isPending}
            onClick={() => exportPack.mutate({ includeKillSwitchDrills: true })}
          >
            {exportPack.isPending ? 'Sealing…' : 'Export supervisory pack'}
          </PrimaryButton>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Board snapshot">
          <StatusChip tone="approaching" label="Open forecasts block clean pack language" />
          <p className="mt-3 text-sm text-steel">
            Production count, within-appetite count, overdue kill drills. Lock
            only after predicted breaches are actioned or disclosed.
          </p>
        </Panel>
        <Panel title="Supervisory export">
          <p className="text-sm text-steel">
            Inventory + bindings + tests + issues + variations. Verify hashes on
            the sealed bundle.
          </p>
        </Panel>
      </div>
    </div>
  );
}
