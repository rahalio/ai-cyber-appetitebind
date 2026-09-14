/**
 * IdGeneratorService Port — Appetitebind prefixes.
 */

import type { DomainCode } from '@appetitebind/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  ucsId(): string;
  aptId(): string;
  frnId(): string;
  asmId(): string;
  ctlId(): string;
  monId(): string;
  prdId(): string;
  govId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
