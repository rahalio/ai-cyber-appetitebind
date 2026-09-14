import { useTenantQuery } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";

export function useListIssues(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["governance", "listIssues", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return governanceService.listIssues(params as any, signal);
    }
  );
}

export function useListVariations(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["governance", "listVariations", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return governanceService.listVariations(params as any, signal);
    }
  );
}

