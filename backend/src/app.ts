import cors from "cors";
import express from "express";
import router from "./routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json())
app.use("/health", healthRouter);

app.use(router);

app.use(notFound);
app.use(errorHandler);

export default app;
