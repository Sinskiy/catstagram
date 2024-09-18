import { Request, Response } from "express";
import { ErrorWithStatus } from "../middlewares/errorHandler.js";
import { createUser, getUser } from "../services/userService.js";
import bcrypt from "bcryptjs";

export async function signUp(req: Request, res: Response) {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    throw new ErrorWithStatus(400, "Password is not confirmed");
  }

  const user = await getUser({ email: email });
  if (user) {
    throw new ErrorWithStatus(400, "Email is not unique");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await createUser({
    username: username,
    email: email,
    password: hashedPassword,
  });

  res.json({ message: "OK" });
}

export function sessionGet(req: Request, res: Response) {
  if (!req.user) {
    throw new ErrorWithStatus(401, "Unauthorized");
  }

  res.json({ user: req.user });
}
