/**
 * Controls Service
 *
 * API client for controls domain.
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
// import type { ... } from "./controls.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawControlsService = {
  /**
   * List control tests
   */
  async listControlTests(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/control-tests` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Schedule a control test
   */
  async scheduleControlTest(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/control-tests`;

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
   * Submit control test evidence
   */
  async createEvidence(testId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/control-tests/${testId}/evidence`;

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
   * List hand-to-human rules
   */
  async listHandToHumanRules(useCaseId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/hand-to-human-rules` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Replace hand-to-human rules
   */
  async setHandToHumanRules(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/hand-to-human-rules`;

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
   * Get kill-switch configuration
   */
  async getKillSwitch(useCaseId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/kill-switch` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Register or update kill-switch
   */
  async createKillSwitch(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/kill-switch`;

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
   * Record kill-switch drill
   */
  async drillKillSwitch(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/kill-switch/drill`;

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
   * Execute kill-switch
   */
  async executeKillSwitch(useCaseId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/use-cases/${useCaseId}/kill-switch/execute`;

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
export const controlsService = makeService(rawControlsService, "controls");
