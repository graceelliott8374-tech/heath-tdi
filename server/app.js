import "dotenv/config";

import cors from "cors";
import express from "express";
import helmet from "helmet";

import contactRouter from "./contact.js";
import supportRouter from "./support.js";

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(helmet());

app.use(
  cors({
    origin: CLIENT_ORIGIN,
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

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Heath TDI backend running on port ${PORT}`);
  });
}

export default app;
