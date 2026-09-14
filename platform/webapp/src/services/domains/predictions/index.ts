/**
 * Predictions Domain
 *
 * Barrel export for predictions service, types, hooks, and view models.
 *
 * Architecture Rules:
 * - API types: re-exports from @appetitebind/core only
 * - View models: UI-only extensions (VM suffix)
 * - Service: only place that touches network
 * - Hooks: call service only (never apiClient directly)
 * - Mappers: internal to service layer (not for components)
 * - Components: domain-specific UI (not exported from barrel)
 */

// ============================================================================
// Service (runtime boundary - only place that touches network)
// ============================================================================
export { predictionsService } from './predictions.service';

// ============================================================================
// Facade (high-level API for components)
// ============================================================================
export { predictionsFacade } from './facade';

// ============================================================================
// Contracts (runtime validation)
// ============================================================================
export * from "./contracts";

// ============================================================================
// Hooks (consolidated in hooks/ directory)
// ============================================================================
export * from './hooks';

// ============================================================================
// Components (domain-specific UI - not exported from barrel)
// ============================================================================
// Components are now in features/ directory and should be imported from there.
// This prevents cross-domain component dependencies and keeps the barrel focused.
