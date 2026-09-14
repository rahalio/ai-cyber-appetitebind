/**
 * Controls Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/controls.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AiControlTest = components["schemas"]["AiControlTest"];
export type AiControlTestCreate = components["schemas"]["AiControlTestCreate"];
export type AiControlTestListData = components["schemas"]["AiControlTestListData"];
export type HandToHumanRule = components["schemas"]["HandToHumanRule"];
export type HandToHumanRuleId = components["schemas"]["HandToHumanRuleId"];
export type HandToHumanRuleListData = components["schemas"]["HandToHumanRuleListData"];
export type KillSwitch = components["schemas"]["KillSwitch"];
export type KillSwitchDrill = components["schemas"]["KillSwitchDrill"];
export type KillSwitchDrillId = components["schemas"]["KillSwitchDrillId"];
export type TestEvidence = components["schemas"]["TestEvidence"];
export type TestId = components["schemas"]["TestId"];
export type UseCaseId = components["schemas"]["UseCaseId"];
export type KillSwitchDrillRequest = components["schemas"]["KillSwitchDrillRequest"];
export type KillSwitchExecuteRequest = components["schemas"]["KillSwitchExecuteRequest"];
export type SetHandToHumanRulesRequest = components["schemas"]["SetHandToHumanRulesRequest"];
export type ControlTest = operations["listAiControlTests"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ScheduleAiControlTestRequestInput = NonNullable<operations["scheduleAiControlTest"]["requestBody"]>["content"]["application/json"];
export type SubmitControlTestEvidenceRequestInput = NonNullable<operations["submitControlTestEvidence"]["requestBody"]>["content"]["application/json"];
export type SetHandToHumanRulesRequestInput = NonNullable<operations["setHandToHumanRules"]["requestBody"]>["content"]["application/json"];
export type RegisterKillSwitchRequestInput = NonNullable<operations["registerKillSwitch"]["requestBody"]>["content"]["application/json"];
export type DrillKillSwitchRequestInput = NonNullable<operations["drillKillSwitch"]["requestBody"]>["content"]["application/json"];
export type ExecuteKillSwitchRequestInput = NonNullable<operations["executeKillSwitch"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAiControlTestsParams = NonNullable<operations["listAiControlTests"]["parameters"]["query"]>;
export type SubmitControlTestEvidenceParams = operations["submitControlTestEvidence"]["parameters"]["path"];
export type ListHandToHumanRulesParams = operations["listHandToHumanRules"]["parameters"]["path"];
export type SetHandToHumanRulesParams = operations["setHandToHumanRules"]["parameters"]["path"];
export type GetKillSwitchParams = operations["getKillSwitch"]["parameters"]["path"];
export type RegisterKillSwitchParams = operations["registerKillSwitch"]["parameters"]["path"];
export type DrillKillSwitchParams = operations["drillKillSwitch"]["parameters"]["path"];
export type ExecuteKillSwitchParams = operations["executeKillSwitch"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAiControlTestsResponse = operations["listAiControlTests"]["responses"]["200"]["content"]["application/json"];
export type ScheduleAiControlTestResponse = operations["scheduleAiControlTest"]["responses"]["201"]["content"]["application/json"];
export type SubmitControlTestEvidenceResponse = operations["submitControlTestEvidence"]["responses"]["201"]["content"]["application/json"];
export type ListHandToHumanRulesResponse = operations["listHandToHumanRules"]["responses"]["200"]["content"]["application/json"];
export type SetHandToHumanRulesResponse = operations["setHandToHumanRules"]["responses"]["200"]["content"]["application/json"];
export type GetKillSwitchResponse = operations["getKillSwitch"]["responses"]["200"]["content"]["application/json"];
export type RegisterKillSwitchResponse = operations["registerKillSwitch"]["responses"]["200"]["content"]["application/json"];
export type DrillKillSwitchResponse = operations["drillKillSwitch"]["responses"]["201"]["content"]["application/json"];
export type ExecuteKillSwitchResponse = operations["executeKillSwitch"]["responses"]["202"]["content"]["application/json"];


