/**
 * Fairness Domain Contracts
 *
 * Re-exports Zod schemas from @appetitebind/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @appetitebind/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @appetitebind/core/fairness for the source schemas
 */

import { fairnessSchemas as coreFairnessSchemas } from "@appetitebind/core/fairness";
/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
/**
 * Export all schemas as a namespace for convenience
 */
export const fairnessSchemas = coreFairnessSchemas;
