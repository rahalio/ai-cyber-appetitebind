import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const updateFairnessPolicy_Body = z
  .object({
    fairnessPolicyId: z.string().regex(/^fpl_[0-9A-HJKMNP-TV-Z]{26}$/),
    version: z.string(),
    narrative: z.string().optional(),
    thresholds: z.array(
      z
        .object({
          metric: z.string(),
          limit: z.number(),
          segment: z.string().optional(),
        })
        .passthrough()
    ),
    approvedBy: z.string().optional(),
    approvedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const createFairnessAssessment_Body = z
  .object({
    outcome: z.enum(['pass', 'conditional', 'fail']),
    metrics: z.record(z.number()),
    vulnerableCustomerConsidered: z.boolean().optional().default(true),
    notes: z.string().optional(),
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
const FairnessPolicyId = z.string();
const FairnessThreshold = z
  .object({
    metric: z.string(),
    limit: z.number(),
    segment: z.string().optional(),
  })
  .passthrough();
const FairnessPolicy = z
  .object({
    fairnessPolicyId: z.string().regex(/^fpl_[0-9A-HJKMNP-TV-Z]{26}$/),
    version: z.string(),
    narrative: z.string().optional(),
    thresholds: z.array(
      z
        .object({
          metric: z.string(),
          limit: z.number(),
          segment: z.string().optional(),
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
const FairnessPolicyResponse = z
  .object({
    data: z
      .object({
        fairnessPolicyId: z.string().regex(/^fpl_[0-9A-HJKMNP-TV-Z]{26}$/),
        version: z.string(),
        narrative: z.string().optional(),
        thresholds: z.array(
          z
            .object({
              metric: z.string(),
              limit: z.number(),
              segment: z.string().optional(),
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
const FairnessAssessmentId = z.string();
const FairnessAssessment = z
  .object({
    fairnessAssessmentId: z.string().regex(/^fas_[0-9A-HJKMNP-TV-Z]{26}$/),
    useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
    outcome: z.enum(['pass', 'conditional', 'fail']),
    metrics: z.record(z.number()).optional(),
    vulnerableCustomerConsidered: z.boolean().optional(),
    assessedBy: z.string().optional(),
    assessedAt: z.string().datetime({ offset: true }).optional(),
    notes: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const FairnessAssessmentListData = z
  .object({
    items: z.array(
      z
        .object({
          fairnessAssessmentId: z
            .string()
            .regex(/^fas_[0-9A-HJKMNP-TV-Z]{26}$/),
          useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
          outcome: z.enum(['pass', 'conditional', 'fail']),
          metrics: z.record(z.number()).optional(),
          vulnerableCustomerConsidered: z.boolean().optional(),
          assessedBy: z.string().optional(),
          assessedAt: z.string().datetime({ offset: true }).optional(),
          notes: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const FairnessAssessmentListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              fairnessAssessmentId: z
                .string()
                .regex(/^fas_[0-9A-HJKMNP-TV-Z]{26}$/),
              useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
              outcome: z.enum(['pass', 'conditional', 'fail']),
              metrics: z.record(z.number()).optional(),
              vulnerableCustomerConsidered: z.boolean().optional(),
              assessedBy: z.string().optional(),
              assessedAt: z.string().datetime({ offset: true }).optional(),
              notes: z.string().optional(),
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
const FairnessAssessmentCreate = z
  .object({
    outcome: z.enum(['pass', 'conditional', 'fail']),
    metrics: z.record(z.number()),
    vulnerableCustomerConsidered: z.boolean().optional().default(true),
    notes: z.string().optional(),
  })
  .passthrough();
const FairnessAssessmentResponse = z
  .object({
    data: z
      .object({
        fairnessAssessmentId: z.string().regex(/^fas_[0-9A-HJKMNP-TV-Z]{26}$/),
        useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
        outcome: z.enum(['pass', 'conditional', 'fail']),
        metrics: z.record(z.number()).optional(),
        vulnerableCustomerConsidered: z.boolean().optional(),
        assessedBy: z.string().optional(),
        assessedAt: z.string().datetime({ offset: true }).optional(),
        notes: z.string().optional(),
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
  updateFairnessPolicy_Body,
  createFairnessAssessment_Body,
  Problem,
  FairnessPolicyId,
  FairnessThreshold,
  FairnessPolicy,
  ResponseMeta,
  FairnessPolicyResponse,
  UseCaseId,
  FairnessAssessmentId,
  FairnessAssessment,
  FairnessAssessmentListData,
  FairnessAssessmentListResponse,
  FairnessAssessmentCreate,
  FairnessAssessmentResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/fairness-policy',
    alias: 'getFairnessPolicy',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            fairnessPolicyId: z.string().regex(/^fpl_[0-9A-HJKMNP-TV-Z]{26}$/),
            version: z.string(),
            narrative: z.string().optional(),
            thresholds: z.array(
              z
                .object({
                  metric: z.string(),
                  limit: z.number(),
                  segment: z.string().optional(),
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
    path: '/v1/fairness-policy',
    alias: 'updateFairnessPolicy',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateFairnessPolicy_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            fairnessPolicyId: z.string().regex(/^fpl_[0-9A-HJKMNP-TV-Z]{26}$/),
            version: z.string(),
            narrative: z.string().optional(),
            thresholds: z.array(
              z
                .object({
                  metric: z.string(),
                  limit: z.number(),
                  segment: z.string().optional(),
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
    path: '/v1/use-cases/:useCaseId/fairness-assessments',
    alias: 'listFairnessAssessments',
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
                  fairnessAssessmentId: z
                    .string()
                    .regex(/^fas_[0-9A-HJKMNP-TV-Z]{26}$/),
                  useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
                  outcome: z.enum(['pass', 'conditional', 'fail']),
                  metrics: z.record(z.number()).optional(),
                  vulnerableCustomerConsidered: z.boolean().optional(),
                  assessedBy: z.string().optional(),
                  assessedAt: z.string().datetime({ offset: true }).optional(),
                  notes: z.string().optional(),
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
  },
  {
    method: 'post',
    path: '/v1/use-cases/:useCaseId/fairness-assessments',
    alias: 'createFairnessAssessment',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createFairnessAssessment_Body,
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
            fairnessAssessmentId: z
              .string()
              .regex(/^fas_[0-9A-HJKMNP-TV-Z]{26}$/),
            useCaseId: z.string().regex(/^ucs_[0-9A-HJKMNP-TV-Z]{26}$/),
            outcome: z.enum(['pass', 'conditional', 'fail']),
            metrics: z.record(z.number()).optional(),
            vulnerableCustomerConsidered: z.boolean().optional(),
            assessedBy: z.string().optional(),
            assessedAt: z.string().datetime({ offset: true }).optional(),
            notes: z.string().optional(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
