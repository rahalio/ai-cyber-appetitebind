# Appetitebind

Enterprise AI risk OS: bind every use case to appetite and fairness, run continuous control testing with a governed kill-switch, and predict residual-risk breaches before the board pack locks.

OpenAPI-first DDD monorepo. Package scope: **`@appetitebind/*`**.

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
         ↑ one YAML per domain                                              ports↑        impl↑              HTTP↑
platform/webapp  →  Next.js binding desk (codegen clients + WEBAPP.md screens)
```

Product specs: `PRODUCT.md`, `USER_STORIES.md`, `WEBAPP.md`.

## Quick start

Copy codegen tooling locally (never commit it):

```bash
rsync -a --exclude node_modules /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/ .codegen/
pnpm install
pnpm codegen:paths
pnpm lint:openapi && pnpm bundle:openapi
pnpm build
pnpm dev:api   # http://127.0.0.1:4000
pnpm dev:web   # http://127.0.0.1:3000
```

Demo key: `X-API-Key: ddd_demo_local_dev_key`

## HARD RULE — never push `.codegen`

`.codegen/`, `codegen/`, and `**/zero_codegen/` are gitignored. Do not `git add` them. Bootstrap from `zero-apps-codegen-scaffold` (or a sibling product) when missing. Bundled OpenAPI under `packages/openapi-core/src/.bundled/` is also generated and gitignored.

## Codegen rules (agents)

1. **New domain** → full multi-layer generate once (Mode A).
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B).
3. After YAML: `pnpm lint:openapi && pnpm bundle:openapi && pnpm codegen:core`.
4. Keep envelopes (`{ data, meta }`), nested DI, and identity `/v0` middleware intact.

See `.cursor/skills/` and `docs/CODEGEN.md`.
