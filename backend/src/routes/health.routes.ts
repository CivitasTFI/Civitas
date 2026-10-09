import { Router } from "express";
import { successResponse } from "../utils/httpResponse";

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
  res.status(200).json(
    successResponse({
      status: "Funcionando correctamente",
    })
  );
});

export default healthRouter;
