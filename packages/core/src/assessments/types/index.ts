/**
 * Assessments Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/assessments.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AssessmentId = components["schemas"]["AssessmentId"];
export type ReferenceComparison = components["schemas"]["ReferenceComparison"];
export type RiskAssessment = components["schemas"]["RiskAssessment"];
export type RiskAssessmentCreate = components["schemas"]["RiskAssessmentCreate"];
export type RiskAssessmentListData = components["schemas"]["RiskAssessmentListData"];
export type RiskIdentification = components["schemas"]["RiskIdentification"];
export type RiskIdentificationCreate = components["schemas"]["RiskIdentificationCreate"];
export type RiskIdentificationId = components["schemas"]["RiskIdentificationId"];
export type ThreeLinesSignOff = components["schemas"]["ThreeLinesSignOff"];
export type UseCaseId = components["schemas"]["UseCaseId"];
export type Assessment = operations["listRiskAssessments"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RecordRiskIdentificationRequestInput = NonNullable<operations["recordRiskIdentification"]["requestBody"]>["content"]["application/json"];
export type CreateRiskAssessmentRequestInput = NonNullable<operations["createRiskAssessment"]["requestBody"]>["content"]["application/json"];
export type RecordReferenceComparisonRequestInput = NonNullable<operations["recordReferenceComparison"]["requestBody"]>["content"]["application/json"];
export type SignOffRiskAssessmentRequestInput = NonNullable<operations["signOffRiskAssessment"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type RecordRiskIdentificationParams = operations["recordRiskIdentification"]["parameters"]["path"];
export type ListRiskAssessmentsParams = NonNullable<operations["listRiskAssessments"]["parameters"]["query"]>;
export type RecordReferenceComparisonParams = operations["recordReferenceComparison"]["parameters"]["path"];
export type SignOffRiskAssessmentParams = operations["signOffRiskAssessment"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type RecordRiskIdentificationResponse = operations["recordRiskIdentification"]["responses"]["201"]["content"]["application/json"];
export type ListRiskAssessmentsResponse = operations["listRiskAssessments"]["responses"]["200"]["content"]["application/json"];
export type CreateRiskAssessmentResponse = operations["createRiskAssessment"]["responses"]["201"]["content"]["application/json"];
export type RecordReferenceComparisonResponse = operations["recordReferenceComparison"]["responses"]["200"]["content"]["application/json"];
export type SignOffRiskAssessmentResponse = operations["signOffRiskAssessment"]["responses"]["200"]["content"]["application/json"];


