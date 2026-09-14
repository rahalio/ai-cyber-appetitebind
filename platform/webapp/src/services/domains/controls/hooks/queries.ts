import { useTenantQuery } from "@/services/shared/infrastructure";
import { controlsService } from "../controls.service";

export function useListControlTests(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["controls", "listControlTests", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return controlsService.listControlTests(params as any, signal);
    }
  );
}

export function useListHandToHumanRules(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["controls", "listHandToHumanRules", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return controlsService.listHandToHumanRules(params as any, signal);
    }
  );
}

export function useGetKillSwitch(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["controls", "getKillSwitch", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return controlsService.getKillSwitch(params as any, signal);
    }
  );
}

