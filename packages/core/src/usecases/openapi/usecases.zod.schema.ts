import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerAiUseCase_Body = z
  .object({
    name: z.string(),
    ownerId: z.string(),
    continuousLearning: z.boolean().optional().default(false),
    externalFacing: z.boolean().optional().default(false),
    customerImpact: z.enum(['none', 'low', 'significant', 'high']).optional(),
    sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
    description: z.string().optional(),
  })
  .passthrough();
const assignUseCaseOwner_Body = z
  .object({ ownerId: z.string(), accountableRegimeRole: z.string().optional() })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const UseCaseId = z.string();
const AiUseCase = z
  .object({
    useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string(),
    status: z.enum([
      'proposed',
      'assessing',
      'approved',
      'production',
      'suspended',
      'retired',
    ]),
    ownerId: z.string(),
    continuousLearning: z.boolean().optional(),
    externalFacing: z.boolean().optional(),
    customerImpact: z.enum(['none', 'low', 'significant', 'high']).optional(),
    sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
    mlopsRef: z.string().optional(),
    accountableRegimeRole: z.string().optional(),
    description: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AiUseCaseListData = z
  .object({
    items: z.array(
      z
        .object({
          useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
          name: z.string(),
          status: z.enum([
            'proposed',
            'assessing',
            'approved',
            'production',
            'suspended',
            'retired',
          ]),
          ownerId: z.string(),
          continuousLearning: z.boolean().optional(),
          externalFacing: z.boolean().optional(),
          customerImpact: z
            .enum(['none', 'low', 'significant', 'high'])
            .optional(),
          sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
          mlopsRef: z.string().optional(),
          accountableRegimeRole: z.string().optional(),
          description: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const AiUseCaseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
              name: z.string(),
              status: z.enum([
                'proposed',
                'assessing',
                'approved',
                'production',
                'suspended',
                'retired',
              ]),
              ownerId: z.string(),
              continuousLearning: z.boolean().optional(),
              externalFacing: z.boolean().optional(),
              customerImpact: z
                .enum(['none', 'low', 'significant', 'high'])
                .optional(),
              sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
              mlopsRef: z.string().optional(),
              accountableRegimeRole: z.string().optional(),
              description: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AiUseCaseCreate = z
  .object({
    name: z.string(),
    ownerId: z.string(),
    continuousLearning: z.boolean().optional().default(false),
    externalFacing: z.boolean().optional().default(false),
    customerImpact: z.enum(['none', 'low', 'significant', 'high']).optional(),
    sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
    description: z.string().optional(),
  })
  .passthrough();
const AiUseCaseResponse = z
  .object({
    data: z
      .object({
        useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
        name: z.string(),
        status: z.enum([
          'proposed',
          'assessing',
          'approved',
          'production',
          'suspended',
          'retired',
        ]),
        ownerId: z.string(),
        continuousLearning: z.boolean().optional(),
        externalFacing: z.boolean().optional(),
        customerImpact: z
          .enum(['none', 'low', 'significant', 'high'])
          .optional(),
        sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
        mlopsRef: z.string().optional(),
        accountableRegimeRole: z.string().optional(),
        description: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AssignOwnerRequest = z
  .object({ ownerId: z.string(), accountableRegimeRole: z.string().optional() })
  .passthrough();

export const schemas: any = {
  registerAiUseCase_Body,
  assignUseCaseOwner_Body,
  Problem,
  UseCaseId,
  AiUseCase,
  AiUseCaseListData,
  ResponseMeta,
  AiUseCaseListResponse,
  AiUseCaseCreate,
  AiUseCaseResponse,
  AssignOwnerRequest,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/use-cases',
    alias: 'listAiUseCases',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum([
            'proposed',
            'assessing',
            'approved',
            'production',
            'suspended',
            'retired',
          ])
          .optional(),
      },
      {
        name: 'continuousLearning',
        type: 'Query',
        schema: z.boolean().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
                  name: z.string(),
                  status: z.enum([
                    'proposed',
                    'assessing',
                    'approved',
                    'production',
                    'suspended',
                    'retired',
                  ]),
                  ownerId: z.string(),
                  continuousLearning: z.boolean().optional(),
                  externalFacing: z.boolean().optional(),
                  customerImpact: z
                    .enum(['none', 'low', 'significant', 'high'])
                    .optional(),
                  sector: z
                    .enum(['banking', 'insurance', 'other_fs'])
                    .optional(),
                  mlopsRef: z.string().optional(),
                  accountableRegimeRole: z.string().optional(),
                  description: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/use-cases',
    alias: 'registerAiUseCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerAiUseCase_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            status: z.enum([
              'proposed',
              'assessing',
              'approved',
              'production',
              'suspended',
              'retired',
            ]),
            ownerId: z.string(),
            continuousLearning: z.boolean().optional(),
            externalFacing: z.boolean().optional(),
            customerImpact: z
              .enum(['none', 'low', 'significant', 'high'])
              .optional(),
            sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
            mlopsRef: z.string().optional(),
            accountableRegimeRole: z.string().optional(),
            description: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/use-cases/:useCaseId',
    alias: 'getAiUseCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'useCaseId',
        type: 'Path',
        schema: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            status: z.enum([
              'proposed',
              'assessing',
              'approved',
              'production',
              'suspended',
              'retired',
            ]),
            ownerId: z.string(),
            continuousLearning: z.boolean().optional(),
            externalFacing: z.boolean().optional(),
            customerImpact: z
              .enum(['none', 'low', 'significant', 'high'])
              .optional(),
            sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
            mlopsRef: z.string().optional(),
            accountableRegimeRole: z.string().optional(),
            description: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'put',
    path: '/v1/use-cases/:useCaseId/owner',
    alias: 'assignUseCaseOwner',
    description: `Named accountable owner responsible for approval, review triggers, and updates when accuracy, fairness, or compliance factors change.
`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: assignUseCaseOwner_Body,
      },
      {
        name: 'useCaseId',
        type: 'Path',
        schema: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            status: z.enum([
              'proposed',
              'assessing',
              'approved',
              'production',
              'suspended',
              'retired',
            ]),
            ownerId: z.string(),
            continuousLearning: z.boolean().optional(),
            externalFacing: z.boolean().optional(),
            customerImpact: z
              .enum(['none', 'low', 'significant', 'high'])
              .optional(),
            sector: z.enum(['banking', 'insurance', 'other_fs']).optional(),
            mlopsRef: z.string().optional(),
            accountableRegimeRole: z.string().optional(),
            description: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
