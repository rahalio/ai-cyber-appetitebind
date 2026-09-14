import { useTenantQuery } from "@/services/shared/infrastructure";
import { fairnessService } from "../fairness.service";

export function useGetFairnessPolicy(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["fairness", "getFairnessPolicy", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return fairnessService.getFairnessPolicy(params as any, signal);
    }
  );
}

export function useListFairnessAssessments(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["fairness", "listFairnessAssessments", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return fairnessService.listFairnessAssessments(params as any, signal);
    }
  );
}

