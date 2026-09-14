/**
 * Governance Service
 *
 * API client for governance domain.
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
// import type { ... } from "./governance.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawGovernanceService = {
  /**
   * List issues
   */
  async listIssues(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/issues` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Open an issue
   */
  async openIssue(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/issues`;

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
   * List algorithm variations
   */
  async listVariations(useCaseId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/variations` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Record algorithm variation
   */
  async recordVariation(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/variations`;

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
   * Publish board residual-risk snapshot
   */
  async publishBoardSnapshot(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/board-snapshots`;

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
   * Create supervisory evidence pack
   */
  async createSupervisoryExport(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/supervisory-exports`;

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
export const governanceService = makeService(rawGovernanceService, "governance");
