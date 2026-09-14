/**
 * Fairness Service
 *
 * API client for fairness domain.
 * Uses ApiResponse<T> pattern - response.data is already T.
 *
 * TODO(client): Migrate all endpoints to typed client when generated.
 * Currently using apiClient.get/post() as temporary fallback.
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";
// TODO: Import schemas from contracts
// import { ... } from "./contracts";
// TODO: Import types from api-types
// import type { ... } from "./fairness.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawFairnessService = {
  /**
   * Get firm fairness policy
   */
  async getFairnessPolicy(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/fairness-policy` + (params ? `?${new URLSearchParams(params).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Update firm fairness policy
   */
  async updateFairnessPolicy(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/fairness-policy`;

    // TODO(client): migrate when generated
    const response = await apiClient.put<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * List fairness assessments
   */
  async listFairnessAssessments(useCaseId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/fairness-assessments` + (params ? `?${new URLSearchParams(params).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Create fairness assessment
   */
  async createFairnessAssessment(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/fairness-assessments`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  }
};

// Wrap service with error handling and logging
export const fairnessService = makeService(rawFairnessService, "fairness");
