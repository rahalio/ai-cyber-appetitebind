import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function cn(...parts: Array<string | false | null | undefined>) {
  return clsx(parts);
}

export const inputClass =
  'w-full rounded-sm border border-rule bg-panel px-3 py-2 text-sm text-ink outline-none focus:border-bind focus:ring-1 focus:ring-bind';

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-steel">
        {label}
      </span>
      {children}
    </label>
  );
}

export function PrimaryButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-sm bg-bind px-3.5 py-2 text-sm font-semibold text-ground disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export function SecondaryButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-sm border border-rule bg-panel px-3.5 py-2 text-sm font-medium text-ink hover:border-bind disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export function ErrorBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm border border-breach/40 bg-breach/10 px-3 py-2 text-sm text-breach">
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p className="font-display text-[11px] uppercase tracking-[0.22em] text-brand">
          Appetitebind
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1 max-w-2xl text-sm text-steel">{subtitle}</p>
        ) : null}
      </div>
      {actions}
    </div>
  );
}

export function Panel({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('limit-ruled rounded-md border border-rule bg-panel', className)}>
      {title ? (
        <header className="border-b border-rule px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-steel">
          {title}
        </header>
      ) : null}
      <div className="p-4">{children}</div>
    </section>
  );
}

export function StatusChip({
  tone,
  label,
}: {
  tone: 'bound' | 'approaching' | 'breached' | 'learn' | 'steel';
  label: string;
}) {
  const tones: Record<typeof tone, string> = {
    bound: 'bg-bind/15 text-bind',
    approaching: 'bg-predict/15 text-predict',
    breached: 'bg-breach/15 text-breach',
    learn: 'bg-learn/15 text-learn',
    steel: 'bg-steel/15 text-steel',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[11px] font-medium',
        tones[tone],
      )}
    >
      {label}
    </span>
  );
}

export function HeadroomBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  const tone =
    clamped >= 70 ? 'bg-bind' : clamped >= 40 ? 'bg-predict' : 'bg-breach';
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-rule">
      <div className={cn('h-full transition-all duration-[180ms] ease-out', tone)} style={{ width: `${clamped}%` }} />
    </div>
  );
}
