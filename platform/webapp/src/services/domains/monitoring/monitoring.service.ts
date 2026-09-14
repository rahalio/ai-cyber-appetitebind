/**
 * Monitoring Service
 *
 * API client for monitoring domain.
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
// import type { ... } from "./monitoring.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawMonitoringService = {
  /**
   * List monitoring metrics
   */
  async listMetrics(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/monitoring/metrics` + (params ? `?${new URLSearchParams(params).toString()}` : '');

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
   * Ingest a monitoring metric
   */
  async ingestMetric(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/monitoring/metrics`;

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
   * Ingest a complaint signal
   */
  async ingestComplaint(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/monitoring/complaints`;

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
   * Ingest a data-shift signal
   */
  async ingestDataShift(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/monitoring/data-shifts`;

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
export const monitoringService = makeService(rawMonitoringService, "monitoring");
