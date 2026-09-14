import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const updateAppetiteCriteria_Body = z
  .object({
    criteriaId: z.string().regex(/^acr_[0-9A-HJKMNP-TV-Z]{26}$/),
    version: z.string(),
    questions: z.array(
      z
        .object({
          id: z.string(),
          prompt: z.string(),
          weight: z.number().optional(),
        })
        .passthrough()
    ),
    approvedBy: z.string().optional(),
    approvedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const bindUseCaseToAppetite_Body = z
  .object({
    decision: z.enum(['within_appetite', 'conditional', 'outside_appetite']),
    answers: z.record(z.string()),
    conditions: z.array(z.string()).optional(),
    residualRiskLevel: z.enum(['low', 'medium', 'high', 'critical']).optional(),
    expiresAt: z.string().datetime({ offset: true }).optional(),
  })
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
const CriteriaId = z.string();
const AppetiteCriteriaQuestion = z
  .object({ id: z.string(), prompt: z.string(), weight: z.number().optional() })
  .passthrough();
const AppetiteCriteria = z
  .object({
    criteriaId: z.string().regex(/^acr_[0-9A-HJKMNP-TV-Z]{26}$/),
    version: z.string(),
    questions: z.array(
      z
        .object({
          id: z.string(),
          prompt: z.string(),
          weight: z.number().optional(),
        })
        .passthrough()
    ),
    approvedBy: z.string().optional(),
    approvedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
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
const AppetiteCriteriaResponse = z
  .object({
    data: z
      .object({
        criteriaId: z.string().regex(/^acr_[0-9A-HJKMNP-TV-Z]{26}$/),
        version: z.string(),
        questions: z.array(
          z
            .object({
              id: z.string(),
              prompt: z.string(),
              weight: z.number().optional(),
            })
            .passthrough()
        ),
        approvedBy: z.string().optional(),
        approvedAt: z.string().datetime({ offset: true }).optional(),
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
const UseCaseId = z.string();
const BindingId = z.string();
const AppetiteBinding = z
  .object({
    bindingId: z.string().regex(/^bnd_[0-9A-HJKMNP-TV-Z]{26}$/),
    useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
    decision: z.enum(['within_appetite', 'conditional', 'outside_appetite']),
    answers: z.record(z.string()).optional(),
    conditions: z.array(z.string()).optional(),
    residualRiskLevel: z.enum(['low', 'medium', 'high', 'critical']).optional(),
    boundBy: z.string().optional(),
    boundAt: z.string().datetime({ offset: true }),
    expiresAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AppetiteBindingListData = z
  .object({
    items: z.array(
      z
        .object({
          bindingId: z.string().regex(/^bnd_[0-9A-HJKMNP-TV-Z]{26}$/),
          useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
          decision: z.enum([
            'within_appetite',
            'conditional',
            'outside_appetite',
          ]),
          answers: z.record(z.string()).optional(),
          conditions: z.array(z.string()).optional(),
          residualRiskLevel: z
            .enum(['low', 'medium', 'high', 'critical'])
            .optional(),
          boundBy: z.string().optional(),
          boundAt: z.string().datetime({ offset: true }),
          expiresAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const AppetiteBindingListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              bindingId: z.string().regex(/^bnd_[0-9A-HJKMNP-TV-Z]{26}$/),
              useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
              decision: z.enum([
                'within_appetite',
                'conditional',
                'outside_appetite',
              ]),
              answers: z.record(z.string()).optional(),
              conditions: z.array(z.string()).optional(),
              residualRiskLevel: z
                .enum(['low', 'medium', 'high', 'critical'])
                .optional(),
              boundBy: z.string().optional(),
              boundAt: z.string().datetime({ offset: true }),
              expiresAt: z.string().datetime({ offset: true }).optional(),
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
const AppetiteBindingCreate = z
  .object({
    decision: z.enum(['within_appetite', 'conditional', 'outside_appetite']),
    answers: z.record(z.string()),
    conditions: z.array(z.string()).optional(),
    residualRiskLevel: z.enum(['low', 'medium', 'high', 'critical']).optional(),
    expiresAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const AppetiteBindingResponse = z
  .object({
    data: z
      .object({
        bindingId: z.string().regex(/^bnd_[0-9A-HJKMNP-TV-Z]{26}$/),
        useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
        decision: z.enum([
          'within_appetite',
          'conditional',
          'outside_appetite',
        ]),
        answers: z.record(z.string()).optional(),
        conditions: z.array(z.string()).optional(),
        residualRiskLevel: z
          .enum(['low', 'medium', 'high', 'critical'])
          .optional(),
        boundBy: z.string().optional(),
        boundAt: z.string().datetime({ offset: true }),
        expiresAt: z.string().datetime({ offset: true }).optional(),
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

export const schemas: any = {
  updateAppetiteCriteria_Body,
  bindUseCaseToAppetite_Body,
  Problem,
  CriteriaId,
  AppetiteCriteriaQuestion,
  AppetiteCriteria,
  ResponseMeta,
  AppetiteCriteriaResponse,
  UseCaseId,
  BindingId,
  AppetiteBinding,
  AppetiteBindingListData,
  AppetiteBindingListResponse,
  AppetiteBindingCreate,
  AppetiteBindingResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/appetite-criteria',
    alias: 'getAppetiteCriteria',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            criteriaId: z.string().regex(/^acr_[0-9A-HJKMNP-TV-Z]{26}$/),
            version: z.string(),
            questions: z.array(
              z
                .object({
                  id: z.string(),
                  prompt: z.string(),
                  weight: z.number().optional(),
                })
                .passthrough()
            ),
            approvedBy: z.string().optional(),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
    method: 'put',
    path: '/v1/appetite-criteria',
    alias: 'updateAppetiteCriteria',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateAppetiteCriteria_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            criteriaId: z.string().regex(/^acr_[0-9A-HJKMNP-TV-Z]{26}$/),
            version: z.string(),
            questions: z.array(
              z
                .object({
                  id: z.string(),
                  prompt: z.string(),
                  weight: z.number().optional(),
                })
                .passthrough()
            ),
            approvedBy: z.string().optional(),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
  },
  {
    method: 'get',
    path: '/v1/use-cases/:useCaseId/appetite-bindings',
    alias: 'listAppetiteBindings',
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
            items: z.array(
              z
                .object({
                  bindingId: z.string().regex(/^bnd_[0-9A-HJKMNP-TV-Z]{26}$/),
                  useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
                  decision: z.enum([
                    'within_appetite',
                    'conditional',
                    'outside_appetite',
                  ]),
                  answers: z.record(z.string()).optional(),
                  conditions: z.array(z.string()).optional(),
                  residualRiskLevel: z
                    .enum(['low', 'medium', 'high', 'critical'])
                    .optional(),
                  boundBy: z.string().optional(),
                  boundAt: z.string().datetime({ offset: true }),
                  expiresAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/use-cases/:useCaseId/appetite-bindings',
    alias: 'bindUseCaseToAppetite',
    description: `Record appetite-binding decision. Production traffic must not be enabled without a current binding that permits go-live.
`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: bindUseCaseToAppetite_Body,
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
            bindingId: z.string().regex(/^bnd_[0-9A-HJKMNP-TV-Z]{26}$/),
            useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
            decision: z.enum([
              'within_appetite',
              'conditional',
              'outside_appetite',
            ]),
            answers: z.record(z.string()).optional(),
            conditions: z.array(z.string()).optional(),
            residualRiskLevel: z
              .enum(['low', 'medium', 'high', 'critical'])
              .optional(),
            boundBy: z.string().optional(),
            boundAt: z.string().datetime({ offset: true }),
            expiresAt: z.string().datetime({ offset: true }).optional(),
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
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
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
