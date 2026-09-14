import { useTenantMutation } from "@/services/shared/infrastructure";
import { controlsService } from "../controls.service";

export function useScheduleControlTest() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return controlsService.scheduleControlTest(data as any);
    },
    { invalidateQueries: [["controls"]] }
  );
}

export function useCreateEvidence() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return controlsService.createEvidence(data as any);
    },
    { invalidateQueries: [["controls"]] }
  );
}

export function useSetHandToHumanRules() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return controlsService.setHandToHumanRules(data as any);
    },
    { invalidateQueries: [["controls"]] }
  );
}

export function useCreateKillSwitch() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return controlsService.createKillSwitch(data as any);
    },
    { invalidateQueries: [["controls"]] }
  );
}

export function useDrillKillSwitch() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return controlsService.drillKillSwitch(data as any);
    },
    { invalidateQueries: [["controls"]] }
  );
}

export function useExecuteKillSwitch() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return controlsService.executeKillSwitch(data as any);
    },
    { invalidateQueries: [["controls"]] }
  );
}

