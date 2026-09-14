import { useTenantMutation } from "@/services/shared/infrastructure";
import { fairnessService } from "../fairness.service";

export function useUpdateFairnessPolicy() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return fairnessService.updateFairnessPolicy(data as any);
    },
    { invalidateQueries: [["fairness"]] }
  );
}

export function useCreateFairnessAssessment() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return fairnessService.createFairnessAssessment(data as any);
    },
    { invalidateQueries: [["fairness"]] }
  );
}

