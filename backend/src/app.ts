import cors from "cors";
import express from "express";
import healthRouter from "./routes/health.routes";

const app = express();

app.use(cors());
app.use(express.json())
app.use("/health", healthRouter);

export default app;