import { useTenantMutation } from "@/services/shared/infrastructure";
import { monitoringService } from "../monitoring.service";

export function useIngestMetric() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return monitoringService.ingestMetric(data as any);
    },
    { invalidateQueries: [["monitoring"]] }
  );
}

export function useIngestComplaint() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return monitoringService.ingestComplaint(data as any);
    },
    { invalidateQueries: [["monitoring"]] }
  );
}

export function useIngestDataShift() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return monitoringService.ingestDataShift(data as any);
    },
    { invalidateQueries: [["monitoring"]] }
  );
}

