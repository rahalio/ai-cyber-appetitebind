/**
 * ID Generator Service Implementation — Appetitebind prefixes.
 */

import type { DomainCode } from '@appetitebind/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP } from '@appetitebind/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@appetitebind/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z0-9]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters or digits.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  ucsId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.useCase);
  }
  aptId(): string {
    return generateIdWithPrefix('apt');
  }
  frnId(): string {
    return generateIdWithPrefix('frn');
  }
  asmId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.assessment);
  }
  ctlId(): string {
    return generateIdWithPrefix('ctl');
  }
  monId(): string {
    return generateIdWithPrefix('mon');
  }
  prdId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.prediction);
  }
  govId(): string {
    return generateIdWithPrefix('gov');
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
