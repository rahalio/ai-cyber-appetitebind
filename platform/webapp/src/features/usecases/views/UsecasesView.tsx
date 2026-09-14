/**
 * Usecases View
 *
 * Main view component for usecases domain.
 */

import { UsecasesViewProps } from "./types";

export function UsecasesView({}: UsecasesViewProps) {
  return (
    <p className="text-sm text-steel">
      Inventory lives at /inventory — the binding desk home.
    </p>
  );
}
