import { useTenantMutation } from "@/services/shared/infrastructure";
import { usecasesService } from "../usecases.service";

export function useCreateUseCase() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return usecasesService.createUseCase(data as any);
    },
    { invalidateQueries: [["usecases"]] }
  );
}

export function useAssignOwner() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return usecasesService.assignOwner(data as any);
    },
    { invalidateQueries: [["usecases"]] }
  );
}

