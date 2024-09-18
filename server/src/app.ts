import express, { json, urlencoded } from "express";
import cors from "cors";
import apiRouter from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import passport from "./configs/auth.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(passport.session());

app.use("/", apiRouter);

app.use(errorHandler);

const port = Number(process.env.PORT) || 3000;
app.listen(
  port,
  () =>
    process.env.NODE_ENV === "production" &&
    console.log(`http://localhost:${port}`),
);
