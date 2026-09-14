'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader, Panel, Field, inputClass, PrimaryButton, ErrorBanner } from '@/components/ui';
import { useCreateUseCase } from '@/services/domains/usecases';
import { formatProblem } from '@/services/shared/http';

export default function RegisterUseCasePage() {
  const router = useRouter();
  const create = useCreateUseCase();
  const [name, setName] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const result = await create.mutateAsync({ name, ownerId });
      const data = (result as { data?: { useCaseId?: string } })?.data;
      const id = data?.useCaseId;
      router.push(id ? `/inventory/${id}` : '/inventory');
    } catch (err) {
      setError(formatProblem(err));
    }
  }

  return (
    <div>
      <PageHeader
        title="Register use case"
        subtitle="Name an accountable owner before any production path (BR-9)."
      />
      <Panel title="New application">
        <form onSubmit={onSubmit} className="max-w-md space-y-4">
          {error ? <ErrorBanner>{error}</ErrorBanner> : null}
          <Field label="Name">
            <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required />
          </Field>
          <Field label="Owner id">
            <input className={`${inputClass} font-mono`} value={ownerId} onChange={(e) => setOwnerId(e.target.value)} required />
          </Field>
          <PrimaryButton type="submit" disabled={create.isPending}>
            {create.isPending ? 'Registering…' : 'Register'}
          </PrimaryButton>
        </form>
      </Panel>
    </div>
  );
}
