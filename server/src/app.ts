import express from "express";
export const app = express();

app.get("/", (_, res) => res.send("hello world!"));

const port = Number(process.env.PORT) || 3000;
app.listen(
  port,
  () =>
    process.env.NODE_ENV === "production" &&
    console.log(`http://localhost:${port}`),
);
