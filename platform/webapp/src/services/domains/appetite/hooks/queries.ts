import { useTenantQuery } from "@/services/shared/infrastructure";
import { appetiteService } from "../appetite.service";

export function useGetAppetiteCriterium(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["appetite", "getAppetiteCriterium", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return appetiteService.getAppetiteCriterium(params as any, signal);
    }
  );
}

export function useListAppetiteBindings(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["appetite", "listAppetiteBindings", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return appetiteService.listAppetiteBindings(params as any, signal);
    }
  );
}

