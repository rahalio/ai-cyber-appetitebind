import { useTenantMutation } from "@/services/shared/infrastructure";
import { appetiteService } from "../appetite.service";

export function useUpdateAppetiteCriterium() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return appetiteService.updateAppetiteCriterium(data as any);
    },
    { invalidateQueries: [["appetite"]] }
  );
}

export function useBindUseCaseToAppetite() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return appetiteService.bindUseCaseToAppetite(data as any);
    },
    { invalidateQueries: [["appetite"]] }
  );
}

