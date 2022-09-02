import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Methods",
    ],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    preflightContinue: true,
    origin: "*",
  })
);

app.use("/api/v0/", IndexRouter);

// Root URI call
app.get("/", async (req, res) => {
  res.send("/api/v0/");
});

(async () => {
  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();
  console.log("Database Connected");
})();

// Start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}....`);
  console.log(`press CTRL+C to stop server`);
});
