/**
 * Usecases Service
 *
 * API client for usecases domain.
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
// import type { ... } from "./usecases.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawUsecasesService = {
  /**
   * List AI use cases
   */
  async listUseCases(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Register an AI use case
   */
  async createUseCase(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases`;

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
   * Get AI use case
   */
  async getUseCase(useCaseId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Assign accountable owner
   */
  async assignOwner(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/owner`;

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
  }
};

// Wrap service with error handling and logging
export const usecasesService = makeService(rawUsecasesService, "usecases");
