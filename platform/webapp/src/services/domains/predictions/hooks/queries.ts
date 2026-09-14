import { useTenantQuery } from "@/services/shared/infrastructure";
import { predictionsService } from "../predictions.service";

export function useGetBreach(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["predictions", "getBreach", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return predictionsService.getBreach(params as any, signal);
    }
  );
}

export function useGetAction(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["predictions", "getAction", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return predictionsService.getAction(params as any, signal);
    }
  );
}

