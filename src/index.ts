import express, { Express } from "express";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
//import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleQueue from "./queues/SampleQueue";
import runPython from "./containers/runPythonDocker";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");
createBullBoard({
  queues: [new BullAdapter(SampleQueue)],
  serverAdapter: serverAdapter,
});

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.use("/admin/queues", serverAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log("Server is start at PORT :", 3000);

  const code = 'print("hello")';
  runPython(code);
});
