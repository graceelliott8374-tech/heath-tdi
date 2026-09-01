import "dotenv/config";

import cors from "cors";
import express from "express";
import helmet from "helmet";

import contactRouter from "./contact.js";
import supportRouter from "./support.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

/*
 * CLIENT_ORIGIN may contain one address or multiple comma-separated addresses.
 *
 * LOCAL DEVELOPMENT:
 * CLIENT_ORIGIN=http://localhost:5173
 *
 * FRIDAY DEPLOYMENT — set this in the backend Vercel project:
 * CLIENT_ORIGIN=https://heathtdi.com,https://www.heathtdi.com
 *
 * Do not include trailing slashes.
 */
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      /*
       * Requests made directly by tools such as Postman or curl may not
       * include an Origin header. Browser requests must match the allowlist.
       */
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("This origin is not allowed by CORS."));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "25kb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Heath TDI backend is running.",
  });
});

app.use("/api/contact", contactRouter);
app.use("/api/support", supportRouter);

app.use("/api", (req, res) => {
  res.status(404).json({
    message: "API endpoint not found.",
  });
});

/*
 * Start a traditional server when running locally.
 * Vercel imports the exported Express app and manages the server itself.
 */
if (process.env.NODE_ENV !== "test" && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Heath TDI backend running on port ${PORT}`);
  });
}

export default app;
