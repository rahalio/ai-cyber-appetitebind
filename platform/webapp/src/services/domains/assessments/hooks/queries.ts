import { useTenantQuery } from "@/services/shared/infrastructure";
import { assessmentsService } from "../assessments.service";

export function useGetRiskIdentification(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["assessments", "getRiskIdentification", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return assessmentsService.getRiskIdentification(params as any, signal);
    }
  );
}

export function useGetAssessment(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["assessments", "getAssessment", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return assessmentsService.getAssessment(params as any, signal);
    }
  );
}

export function useGetReferenceComparison(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["assessments", "getReferenceComparison", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return assessmentsService.getReferenceComparison(params as any, signal);
    }
  );
}

export function useGetSignOff(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["assessments", "getSignOff", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return assessmentsService.getSignOff(params as any, signal);
    }
  );
}

