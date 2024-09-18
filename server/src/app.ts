import express from "express";
import apiRouter from "./routes/index.js";
const app = express();

app.use("/", apiRouter);

const port = Number(process.env.PORT) || 3000;
app.listen(
  port,
  () =>
    process.env.NODE_ENV === "production" &&
    console.log(`http://localhost:${port}`),
);
