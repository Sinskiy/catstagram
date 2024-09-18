import { Router } from "express";
import { sessionGet, signUp } from "../controllers/authController.js";
import passport from "passport";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/login", passport.authenticate("local"), sessionGet);
authRouter.get("/session", sessionGet);

export default authRouter;
