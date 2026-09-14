import { useTenantMutation } from "@/services/shared/infrastructure";
import { predictionsService } from "../predictions.service";

export function useCreateRun() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return predictionsService.createRun(data as any);
    },
    { invalidateQueries: [["predictions"]] }
  );
}

