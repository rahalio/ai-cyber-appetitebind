/**
 * Governance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/governance.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AlgorithmVariation = components["schemas"]["AlgorithmVariation"];
export type AlgorithmVariationCreate = components["schemas"]["AlgorithmVariationCreate"];
export type AlgorithmVariationListData = components["schemas"]["AlgorithmVariationListData"];
export type BoardSnapshot = components["schemas"]["BoardSnapshot"];
export type BoardSnapshotId = components["schemas"]["BoardSnapshotId"];
export type Issue = components["schemas"]["Issue"];
export type IssueCreate = components["schemas"]["IssueCreate"];
export type IssueId = components["schemas"]["IssueId"];
export type IssueListData = components["schemas"]["IssueListData"];
export type SupervisoryExport = components["schemas"]["SupervisoryExport"];
export type SupervisoryExportId = components["schemas"]["SupervisoryExportId"];
export type UseCaseId = components["schemas"]["UseCaseId"];
export type VariationId = components["schemas"]["VariationId"];
export type CreateSupervisoryExportRequest = components["schemas"]["CreateSupervisoryExportRequest"];
export type PublishBoardSnapshotRequest = components["schemas"]["PublishBoardSnapshotRequest"];
export type Variation = operations["listAlgorithmVariations"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenIssueRequestInput = NonNullable<operations["openIssue"]["requestBody"]>["content"]["application/json"];
export type RecordAlgorithmVariationRequestInput = NonNullable<operations["recordAlgorithmVariation"]["requestBody"]>["content"]["application/json"];
export type PublishBoardSnapshotRequestInput = NonNullable<operations["publishBoardSnapshot"]["requestBody"]>["content"]["application/json"];
export type CreateSupervisoryExportRequestInput = NonNullable<operations["createSupervisoryExport"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListIssuesParams = NonNullable<operations["listIssues"]["parameters"]["query"]>;
export type ListAlgorithmVariationsParams = operations["listAlgorithmVariations"]["parameters"]["path"];
export type RecordAlgorithmVariationParams = operations["recordAlgorithmVariation"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListIssuesResponse = operations["listIssues"]["responses"]["200"]["content"]["application/json"];
export type OpenIssueResponse = operations["openIssue"]["responses"]["201"]["content"]["application/json"];
export type ListAlgorithmVariationsResponse = operations["listAlgorithmVariations"]["responses"]["200"]["content"]["application/json"];
export type RecordAlgorithmVariationResponse = operations["recordAlgorithmVariation"]["responses"]["201"]["content"]["application/json"];
export type PublishBoardSnapshotResponse = operations["publishBoardSnapshot"]["responses"]["201"]["content"]["application/json"];
export type CreateSupervisoryExportResponse = operations["createSupervisoryExport"]["responses"]["201"]["content"]["application/json"];


