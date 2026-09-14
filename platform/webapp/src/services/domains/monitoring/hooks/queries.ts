import { useTenantQuery } from "@/services/shared/infrastructure";
import { monitoringService } from "../monitoring.service";

export function useListMetrics(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["monitoring", "listMetrics", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return monitoringService.listMetrics(params as any, signal);
    }
  );
}

