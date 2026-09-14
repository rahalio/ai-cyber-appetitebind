/**
 * Usecases Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/usecases.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AiUseCase = components["schemas"]["AiUseCase"];
export type AiUseCaseCreate = components["schemas"]["AiUseCaseCreate"];
export type AiUseCaseListData = components["schemas"]["AiUseCaseListData"];
export type UseCaseId = components["schemas"]["UseCaseId"];
export type AssignOwnerRequest = components["schemas"]["AssignOwnerRequest"];
export type UseCase = operations["listAiUseCases"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterAiUseCaseRequestInput = NonNullable<operations["registerAiUseCase"]["requestBody"]>["content"]["application/json"];
export type AssignUseCaseOwnerRequestInput = NonNullable<operations["assignUseCaseOwner"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAiUseCasesParams = NonNullable<operations["listAiUseCases"]["parameters"]["query"]>;
export type GetAiUseCaseParams = operations["getAiUseCase"]["parameters"]["path"];
export type AssignUseCaseOwnerParams = operations["assignUseCaseOwner"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAiUseCasesResponse = operations["listAiUseCases"]["responses"]["200"]["content"]["application/json"];
export type RegisterAiUseCaseResponse = operations["registerAiUseCase"]["responses"]["201"]["content"]["application/json"];
export type GetAiUseCaseResponse = operations["getAiUseCase"]["responses"]["200"]["content"]["application/json"];
export type AssignUseCaseOwnerResponse = operations["assignUseCaseOwner"]["responses"]["200"]["content"]["application/json"];


