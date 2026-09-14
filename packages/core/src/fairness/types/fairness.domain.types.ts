/**
 * Fairness Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/fairness.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type FairnessAssessment = components["schemas"]["FairnessAssessment"];
export type FairnessAssessmentCreate = components["schemas"]["FairnessAssessmentCreate"];
export type FairnessAssessmentId = components["schemas"]["FairnessAssessmentId"];
export type FairnessAssessmentListData = components["schemas"]["FairnessAssessmentListData"];
export type FairnessPolicy = components["schemas"]["FairnessPolicy"];
export type FairnessPolicyId = components["schemas"]["FairnessPolicyId"];
export type FairnessThreshold = components["schemas"]["FairnessThreshold"];
export type UseCaseId = components["schemas"]["UseCaseId"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type UpdateFairnessPolicyRequestInput = NonNullable<operations["updateFairnessPolicy"]["requestBody"]>["content"]["application/json"];
export type UpdateFairnessPolicyRequest = UpdateFairnessPolicyRequestInput;
export type CreateFairnessAssessmentRequestInput = NonNullable<operations["createFairnessAssessment"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListFairnessAssessmentsParams = operations["listFairnessAssessments"]["parameters"]["path"];
export type CreateFairnessAssessmentParams = operations["createFairnessAssessment"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type GetFairnessPolicyResponse = operations["getFairnessPolicy"]["responses"]["200"]["content"]["application/json"];
export type UpdateFairnessPolicyResponse = operations["updateFairnessPolicy"]["responses"]["200"]["content"]["application/json"];
export type ListFairnessAssessmentsResponse = operations["listFairnessAssessments"]["responses"]["200"]["content"]["application/json"];
export type CreateFairnessAssessmentResponse = operations["createFairnessAssessment"]["responses"]["201"]["content"]["application/json"];


