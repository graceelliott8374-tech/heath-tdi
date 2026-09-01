import { ipKeyGenerator, rateLimit } from "express-rate-limit";

const MINIMUM_COMPLETION_TIME_MS = 3000;

/*
 * Return the visitor's IP address.
 *
 * On Vercel, the public visitor address is supplied through
 * x-vercel-forwarded-for. During local development and testing,
 * Express's req.ip value is used instead.
 */
function getClientIp(req) {
  const vercelForwardedFor = req.headers["x-vercel-forwarded-for"];

  const forwardedIp = Array.isArray(vercelForwardedFor)
    ? vercelForwardedFor[0]
    : vercelForwardedFor?.split(",")[0].trim();

  return ipKeyGenerator(forwardedIp || req.ip);
}

export const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  keyGenerator: getClientIp,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Too many submissions. Please wait and try again.",
  },
});

export function rejectSpam(req, res, next) {
  const body = req.body ?? {};

  const website = String(body.website ?? "").trim();
  const formStartedAt = Number(body.formStartedAt);

  const completedTooQuickly =
    !Number.isFinite(formStartedAt) ||
    formStartedAt <= 0 ||
    Date.now() - formStartedAt < MINIMUM_COMPLETION_TIME_MS;

  if (website || completedTooQuickly) {
    return res.status(200).json({
      message: "Submission received.",
    });
  }

  delete req.body.website;
  delete req.body.formStartedAt;

  return next();
}
