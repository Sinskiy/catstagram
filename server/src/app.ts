import express from "express";
const app = express();

const port = Number(process.env.PORT) || 3000;
app.listen(
  port,
  () =>
    process.env.NODE_ENV === "production" &&
    console.log(`http://localhost:${port}`),
);
