/**
 * Appetite Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/appetite.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AppetiteBinding = components["schemas"]["AppetiteBinding"];
export type AppetiteBindingCreate = components["schemas"]["AppetiteBindingCreate"];
export type AppetiteBindingListData = components["schemas"]["AppetiteBindingListData"];
export type AppetiteCriteria = components["schemas"]["AppetiteCriteria"];
export type AppetiteCriteriaQuestion = components["schemas"]["AppetiteCriteriaQuestion"];
export type BindingId = components["schemas"]["BindingId"];
export type CriteriaId = components["schemas"]["CriteriaId"];
export type UseCaseId = components["schemas"]["UseCaseId"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type UpdateAppetiteCriteriaRequestInput = NonNullable<operations["updateAppetiteCriteria"]["requestBody"]>["content"]["application/json"];
export type UpdateAppetiteCriteriaRequest = UpdateAppetiteCriteriaRequestInput;
export type BindUseCaseToAppetiteRequestInput = NonNullable<operations["bindUseCaseToAppetite"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAppetiteBindingsParams = operations["listAppetiteBindings"]["parameters"]["path"];
export type BindUseCaseToAppetiteParams = operations["bindUseCaseToAppetite"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type GetAppetiteCriteriaResponse = operations["getAppetiteCriteria"]["responses"]["200"]["content"]["application/json"];
export type UpdateAppetiteCriteriaResponse = operations["updateAppetiteCriteria"]["responses"]["200"]["content"]["application/json"];
export type ListAppetiteBindingsResponse = operations["listAppetiteBindings"]["responses"]["200"]["content"]["application/json"];
export type BindUseCaseToAppetiteResponse = operations["bindUseCaseToAppetite"]["responses"]["201"]["content"]["application/json"];


