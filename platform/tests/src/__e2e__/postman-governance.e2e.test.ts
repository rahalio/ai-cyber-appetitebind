/**
 * Postman-collection 1:1 Vitest tests for governance (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  cursor: "",
  limit: "",
  status: "",
  useCaseId: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / governance (1:1 generated)", () => {

  it("listIssues", async () => {
    const url = sub("{{baseUrl}}/v1/issues?cursor={{cursor}}&limit={{limit}}&useCaseId={{useCaseId}}&status={{status}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("openIssue", async () => {
    const url = sub("{{baseUrl}}/v1/issues");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"useCaseId\": \"newman_useCaseId\",\n  \"title\": \"Engineer\",\n  \"severity\": \"low\",\n  \"detail\": \"\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("listAlgorithmVariations", async () => {
    const url = sub("{{baseUrl}}/v1/use-cases/{{useCaseId}}/variations");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("recordAlgorithmVariation", async () => {
    const url = sub("{{baseUrl}}/v1/use-cases/{{useCaseId}}/variations");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"changeSummary\": \"\",\n  \"versionFrom\": \"\",\n  \"versionTo\": \"\",\n  \"reassessmentTriggered\": true\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("publishBoardSnapshot", async () => {
    const url = sub("{{baseUrl}}/v1/board-snapshots");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"asOf\": \"\",\n  \"includeOpenPredictions\": true\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("createSupervisoryExport", async () => {
    const url = sub("{{baseUrl}}/v1/supervisory-exports");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"useCaseIds\": null,\n  \"includeKillSwitchDrills\": true,\n  \"examinationReference\": \"\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['supervisoryExportId'] = j.data.id;
  });
});
