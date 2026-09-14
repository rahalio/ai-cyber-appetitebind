/**
 * Predictions Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/predictions.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type BreachPrediction = components["schemas"]["BreachPrediction"];
export type BreachPredictionListData = components["schemas"]["BreachPredictionListData"];
export type PredictionId = components["schemas"]["PredictionId"];
export type UseCaseId = components["schemas"]["UseCaseId"];
export type ActionBreachPredictionRequest = components["schemas"]["ActionBreachPredictionRequest"];
export type RunBreachPredictionRequest = components["schemas"]["RunBreachPredictionRequest"];
export type Breach = operations["listBreachPredictions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RunBreachPredictionRequestInput = NonNullable<operations["runBreachPrediction"]["requestBody"]>["content"]["application/json"];
export type ActionBreachPredictionRequestInput = NonNullable<operations["actionBreachPrediction"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListBreachPredictionsParams = NonNullable<operations["listBreachPredictions"]["parameters"]["query"]>;
export type ActionBreachPredictionParams = operations["actionBreachPrediction"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListBreachPredictionsResponse = operations["listBreachPredictions"]["responses"]["200"]["content"]["application/json"];
export type RunBreachPredictionResponse = operations["runBreachPrediction"]["responses"]["200"]["content"]["application/json"];
export type ActionBreachPredictionResponse = operations["actionBreachPrediction"]["responses"]["200"]["content"]["application/json"];


