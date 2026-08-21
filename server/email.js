const GRAPH_SCOPE = "https://graph.microsoft.com/.default";

let cachedAccessToken = "";
let accessTokenExpiresAt = 0;

function getRequiredSetting(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

async function getAccessToken() {
  const tokenIsStillValid =
    cachedAccessToken && Date.now() < accessTokenExpiresAt - 60_000;

  if (tokenIsStillValid) {
    return cachedAccessToken;
  }

  const tenantId = getRequiredSetting("MS_TENANT_ID");
  const clientId = getRequiredSetting("MS_CLIENT_ID");
  const clientSecret = getRequiredSetting("MS_CLIENT_SECRET");

  const tokenUrl =
    `https://login.microsoftonline.com/${tenantId}` + "/oauth2/v2.0/token";

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: GRAPH_SCOPE,
    grant_type: "client_credentials",
  });

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    throw new Error(
      `Microsoft authentication failed with status ${res.status}.`,
    );
  }

  const data = await res.json();

  cachedAccessToken = data.access_token;
  accessTokenExpiresAt = Date.now() + Number(data.expires_in) * 1000;

  return cachedAccessToken;
}

export async function sendEmail({ to, subject, text, replyTo }) {
  const senderMailbox = getRequiredSetting("MS_SENDER_MAILBOX");
  const accessToken = await getAccessToken();

  const message = {
    subject,
    body: {
      contentType: "Text",
      content: text,
    },
    toRecipients: [
      {
        emailAddress: {
          address: to,
        },
      },
    ],
  };

  if (replyTo) {
    message.replyTo = [
      {
        emailAddress: {
          address: replyTo,
        },
      },
    ];
  }

  const graphUrl =
    "https://graph.microsoft.com/v1.0/users/" +
    `${encodeURIComponent(senderMailbox)}/sendMail`;

  const res = await fetch(graphUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
    signal: AbortSignal.timeout(10_000),
  });

  if (res.status !== 202) {
    const requestId = res.headers.get("request-id") || "unavailable";

    throw new Error(
      `Microsoft Graph email failed with status ${res.status}. ` +
        `Request ID: ${requestId}`,
    );
  }
}
