import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
  res.status(200).json({ status: "Funcionando correctamente" });
});

export default healthRouter;