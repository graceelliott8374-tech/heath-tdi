import assert from "node:assert/strict";
import test, { after } from "node:test";

import request from "supertest";

const originalFetch = globalThis.fetch;

process.env.MS_TENANT_ID = "test-tenant-id";
process.env.MS_CLIENT_ID = "test-client-id";
process.env.MS_CLIENT_SECRET = "test-client-secret";
process.env.MS_SENDER_MAILBOX = "forms@heathtdi.com";
process.env.CONTACT_RECIPIENT = "support@heathtdi.com";
process.env.SUPPORT_RECIPIENT = "itsupport@heathtdi.com";

globalThis.fetch = async (url) => {
  const requestUrl = String(url);

  if (requestUrl.includes("/oauth2/v2.0/token")) {
    return new Response(
      JSON.stringify({
        access_token: "test-access-token",
        expires_in: 3600,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  if (requestUrl.includes("graph.microsoft.com/v1.0/users/")) {
    return new Response(null, {
      status: 202,
      headers: {
        "request-id": "test-request-id",
      },
    });
  }

  throw new Error(`Unexpected test request: ${requestUrl}`);
};

after(() => {
  globalThis.fetch = originalFetch;
});

process.env.NODE_ENV = "test";

const { default: app } = await import("./app.js");

const validContactRequest = {
  name: "Test User",
  company: "Heath Telephone & Data",
  email: "test@example.com",
  phone: "706-555-0100",
  services: ["managed-it", "cybersecurity"],
  message: "This is a valid Contact form test.",
  website: "",
  formStartedAt: Date.now() - 5000,
};

const validSupportRequest = {
  name: "Test User",
  company: "Heath Telephone & Data",
  email: "test@example.com",
  phone: "706-555-0100",
  issueType: "technical-issue",
  priority: "normal",
  services: ["managed-it", "network-solutions"],
  subject: "Test support request",
  description: "This is a valid Support form test.",
  requestRingo: true,
  website: "",
  formStartedAt: Date.now() - 5000,
};

const validAssessmentRequest = {
  name: "Test User",
  company: "Heath Telephone & Data",
  email: "test@example.com",
  phone: "706-555-0100",
  concerns: "We would like our network performance and security reviewed.",
  preferredContact: "email",
  website: "",
  formStartedAt: Date.now() - 5000,
};

test("GET /api/health returns the backend status", async () => {
  const res = await request(app).get("/api/health");

  assert.equal(res.status, 200);
  assert.equal(res.body.status, "ok");
});

test("POST /api/contact accepts a valid submission", async () => {
  const res = await request(app).post("/api/contact").send(validContactRequest);

  assert.equal(res.status, 200);
  assert.equal(
    res.body.message,
    "Your message has been submitted successfully.",
  );
});

test("POST /api/contact rejects an invalid email", async () => {
  const res = await request(app)
    .post("/api/contact")
    .send({
      ...validContactRequest,
      email: "not-an-email",
    });

  assert.equal(res.status, 400);
  assert.ok(res.body.errors.email);
});

test("POST /api/contact intercepts a filled honeypot", async () => {
  const res = await request(app)
    .post("/api/contact")
    .send({
      ...validContactRequest,
      website: "https://spam.example",
    });

  assert.equal(res.status, 200);
  assert.equal(res.body.message, "Submission received.");
});

test("POST /api/support accepts a valid submission", async () => {
  const res = await request(app).post("/api/support").send(validSupportRequest);

  assert.equal(res.status, 200);
  assert.equal(
    res.body.message,
    "Your support request has been submitted successfully.",
  );
});

test("POST /api/support rejects an invalid priority", async () => {
  const res = await request(app)
    .post("/api/support")
    .send({
      ...validSupportRequest,
      priority: "whenever",
    });

  assert.equal(res.status, 400);
  assert.ok(res.body.errors.priority);
});

test("POST /api/assessment accepts a valid submission", async () => {
  const res = await request(app)
    .post("/api/assessment")
    .send(validAssessmentRequest);

  assert.equal(res.status, 200);
  assert.equal(
    res.body.message,
    "Your free network assessment request has been submitted successfully.",
  );
});

test("POST /api/assessment requires a phone number when phone is preferred", async () => {
  const res = await request(app)
    .post("/api/assessment")
    .send({
      ...validAssessmentRequest,
      phone: "",
      preferredContact: "phone",
    });

  assert.equal(res.status, 400);
  assert.ok(res.body.errors.phone);
});

test("POST /api/assessment intercepts a filled honeypot", async () => {
  const res = await request(app)
    .post("/api/assessment")
    .send({
      ...validAssessmentRequest,
      website: "https://spam.example",
    });

  assert.equal(res.status, 200);
  assert.equal(res.body.message, "Submission received.");
});
