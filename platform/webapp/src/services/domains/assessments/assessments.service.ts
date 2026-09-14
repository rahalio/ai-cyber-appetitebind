/**
 * Assessments Service
 *
 * API client for assessments domain.
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
// import type { ... } from "./assessments.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawAssessmentsService = {
  /**
   * Record continuous risk re-identification
   */
  async getRiskIdentification(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/risk-identifications`;

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
  },

  /**
   * List risk assessments
   */
  async getAssessment(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/assessments` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Create risk assessment
   */
  async createAssessment(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/assessments`;

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
  },

  /**
   * Record reference-model comparison
   */
  async getReferenceComparison(assessmentId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/assessments/${assessmentId}/reference-comparison`;

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
  },

  /**
   * Record three-lines sign-off
   */
  async getSignOff(assessmentId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/assessments/${assessmentId}/sign-off`;

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
export const assessmentsService = makeService(rawAssessmentsService, "assessments");
