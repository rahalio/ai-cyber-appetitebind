/**
 * Monitoring Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/monitoring.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ComplaintSignal = components["schemas"]["ComplaintSignal"];
export type ComplaintSignalId = components["schemas"]["ComplaintSignalId"];
export type DataShiftSignal = components["schemas"]["DataShiftSignal"];
export type DataShiftSignalId = components["schemas"]["DataShiftSignalId"];
export type MetricId = components["schemas"]["MetricId"];
export type MonitoringMetric = components["schemas"]["MonitoringMetric"];
export type MonitoringMetricIngest = components["schemas"]["MonitoringMetricIngest"];
export type MonitoringMetricListData = components["schemas"]["MonitoringMetricListData"];
export type UseCaseId = components["schemas"]["UseCaseId"];
export type Metric = operations["listMonitoringMetrics"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type IngestMonitoringMetricRequestInput = NonNullable<operations["ingestMonitoringMetric"]["requestBody"]>["content"]["application/json"];
export type IngestComplaintSignalRequestInput = NonNullable<operations["ingestComplaintSignal"]["requestBody"]>["content"]["application/json"];
export type IngestDataShiftSignalRequestInput = NonNullable<operations["ingestDataShiftSignal"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListMonitoringMetricsParams = NonNullable<operations["listMonitoringMetrics"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListMonitoringMetricsResponse = operations["listMonitoringMetrics"]["responses"]["200"]["content"]["application/json"];
export type IngestMonitoringMetricResponse = operations["ingestMonitoringMetric"]["responses"]["202"]["content"]["application/json"];
export type IngestComplaintSignalResponse = operations["ingestComplaintSignal"]["responses"]["202"]["content"]["application/json"];
export type IngestDataShiftSignalResponse = operations["ingestDataShiftSignal"]["responses"]["202"]["content"]["application/json"];


