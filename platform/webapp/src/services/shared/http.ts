import { unwrapDataEnvelope } from '@/services/shared/contracts';

export type ProblemLike = {
  title?: string;
  detail?: string;
  status?: number;
  type?: string;
};

export function formatProblem(err: unknown): string {
  if (!(err instanceof Error)) return 'Unexpected error';
  const data = (err as Error & { data?: ProblemLike | { data?: ProblemLike } }).data;
  const problem =
    data && typeof data === 'object' && 'detail' in data
      ? (data as ProblemLike)
      : data && typeof data === 'object' && 'data' in data
        ? (data as { data?: ProblemLike }).data
        : undefined;
  if (problem?.detail || problem?.title) {
    return [problem.title, problem.detail].filter(Boolean).join(' — ');
  }
  return err.message;
}

export async function unwrap<T>(promise: Promise<{ data: unknown }>): Promise<T> {
  const res = await promise;
  return unwrapDataEnvelope(res.data) as T;
}

export function asItems(data: unknown): Record<string, unknown>[] {
  if (Array.isArray(data)) return data as Record<string, unknown>[];
  if (data && typeof data === 'object' && Array.isArray((data as { items?: unknown }).items)) {
    return (data as { items: Record<string, unknown>[] }).items;
  }
  if (
    data &&
    typeof data === 'object' &&
    'data' in data &&
    Array.isArray((data as { data?: { items?: unknown } }).data?.items)
  ) {
    return (data as { data: { items: Record<string, unknown>[] } }).data.items;
  }
  return [];
}

export function field(row: Record<string, unknown>, ...keys: string[]): string {
  for (const k of keys) {
    const v = row[k];
    if (v != null && String(v).length) return String(v);
  }
  return '—';
}
