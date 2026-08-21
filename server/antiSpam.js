import { rateLimit } from "express-rate-limit";

const MINIMUM_COMPLETION_TIME_MS = 3000;

export const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
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
