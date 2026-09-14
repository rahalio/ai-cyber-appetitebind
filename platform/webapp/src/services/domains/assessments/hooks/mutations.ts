import { useTenantMutation } from "@/services/shared/infrastructure";
import { assessmentsService } from "../assessments.service";

export function useCreateAssessment() {
  return useTenantMutation(
    async (_orgId: string | null, data: unknown) => {
      return assessmentsService.createAssessment(data as any);
    },
    { invalidateQueries: [["assessments"]] }
  );
}

