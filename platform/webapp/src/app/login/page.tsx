'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import {
  ErrorBanner,
  Field,
  inputClass,
  PrimaryButton,
  SecondaryButton,
  StatusChip,
} from '@/components/ui';
import { formatProblem } from '@/services/shared/http';
import { DEMO_API_KEY } from '@/lib/nav';

export default function LoginPage() {
  const { signInWithApiKey, signInWithPassword } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<'apiKey' | 'password'>('apiKey');
  const [apiKey, setApiKey] = useState(DEMO_API_KEY);
  const [tenantLabel, setTenantLabel] = useState('local');
  const [email, setEmail] = useState('admin@demo.local');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === 'apiKey') {
        if (!apiKey.trim()) throw new Error('API key required');
        await signInWithApiKey(apiKey, tenantLabel || undefined);
      } else {
        await signInWithPassword(email, password);
      }
      router.replace('/inventory');
    } catch (err) {
      setError(formatProblem(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden bg-ground lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(63,166,160,0.28),transparent_42%),radial-gradient(circle_at_82%_8%,rgba(196,122,58,0.16),transparent_38%)]" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <div>
            <p className="font-display text-4xl font-semibold tracking-tight text-brand">
              Appetitebind
            </p>
            <p className="mt-3 max-w-md font-display text-xl text-ink">
              Bind AI to appetite before it decides
            </p>
            <div className="mt-4 flex gap-2">
              <StatusChip tone="bound" label="Bound" />
              <StatusChip tone="approaching" label="Approaching" />
              <StatusChip tone="breached" label="Breached" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-steel">
              Every use case occupies appetite and fairness headroom. Predicted
              breaches flash before the board pack locks. Residual AI risk is
              bound here — not narrated in a principles deck.
            </p>
          </div>
          <p className="font-mono text-xs text-steel">
            BR-1 production lock · BR-2 fairness gate · BR-8 pack-lock forecast
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-ground px-6 py-12">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-5">
          <div>
            <h1 className="font-display text-2xl font-semibold text-ink">Sign in</h1>
            <p className="mt-1 text-sm text-steel">
              {mode === 'apiKey'
                ? 'Use the local demo API key against api-server :4000.'
                : 'Operator email and password (identity JWT).'}
            </p>
          </div>

          <div className="flex gap-2">
            <SecondaryButton
              type="button"
              className={mode === 'apiKey' ? 'border-bind text-bind' : undefined}
              onClick={() => setMode('apiKey')}
            >
              API key
            </SecondaryButton>
            <SecondaryButton
              type="button"
              className={mode === 'password' ? 'border-bind text-bind' : undefined}
              onClick={() => setMode('password')}
            >
              Password
            </SecondaryButton>
          </div>

          {error ? <ErrorBanner>{error}</ErrorBanner> : null}

          {mode === 'apiKey' ? (
            <>
              <Field label="API key">
                <input
                  className={`${inputClass} font-mono text-xs`}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  autoComplete="off"
                />
              </Field>
              <Field label="Tenant label">
                <input
                  className={inputClass}
                  value={tenantLabel}
                  onChange={(e) => setTenantLabel(e.target.value)}
                />
              </Field>
            </>
          ) : (
            <>
              <Field label="Email">
                <input
                  className={inputClass}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field label="Password">
                <input
                  className={inputClass}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
            </>
          )}

          <PrimaryButton type="submit" disabled={busy} className="w-full">
            {busy ? 'Signing in…' : 'Open binding desk'}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
