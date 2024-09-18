import { Router } from "express";

const apiRouter = Router();
apiRouter.get("/hello", (_, res) => res.json({ world: true }));

export default apiRouter;
