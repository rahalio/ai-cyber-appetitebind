import { useTenantQuery } from "@/services/shared/infrastructure";
import { usecasesService } from "../usecases.service";

export function useListUseCases(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["usecases", "listUseCases", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return usecasesService.listUseCases(params as any, signal);
    }
  );
}

export function useGetUseCase(params?: Record<string, unknown>) {
  return useTenantQuery(
    ["usecases", "getUseCase", params],
    async (_orgId: string | null, signal?: AbortSignal) => {
      return usecasesService.getUseCase(params as any, signal);
    }
  );
}

