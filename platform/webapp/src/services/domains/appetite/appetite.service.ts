/**
 * Appetite Service
 *
 * API client for appetite domain.
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
// import type { ... } from "./appetite.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawAppetiteService = {
  /**
   * Get firm appetite criteria
   */
  async getAppetiteCriterium(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/appetite-criteria` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Update firm appetite criteria
   */
  async updateAppetiteCriterium(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/appetite-criteria`;

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
   * List appetite bindings for a use case
   */
  async listAppetiteBindings(useCaseId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/appetite-bindings` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Bind use case to appetite
   */
  async bindUseCaseToAppetite(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/appetite-bindings`;

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
export const appetiteService = makeService(rawAppetiteService, "appetite");
