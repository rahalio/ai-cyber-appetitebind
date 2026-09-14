import { useTenantMutation } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";

export function useOpenIssue() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return governanceService.openIssue(data as any);
    },
    { invalidateQueries: [["governance"]] }
  );
}

export function useRecordVariation() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return governanceService.recordVariation(data as any);
    },
    { invalidateQueries: [["governance"]] }
  );
}

export function usePublishBoardSnapshot() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return governanceService.publishBoardSnapshot(data as any);
    },
    { invalidateQueries: [["governance"]] }
  );
}

export function useCreateSupervisoryExport() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return governanceService.createSupervisoryExport(data as any);
    },
    { invalidateQueries: [["governance"]] }
  );
}

