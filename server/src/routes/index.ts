import { Router } from "express";
import authRouter from "./authRouter.js";

const apiRouter = Router();
apiRouter.use("/", authRouter);

export default apiRouter;
