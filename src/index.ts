import express, { Express } from "express";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
//import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";
import SampleQueueProducer from "./producers/SampleQueueProducer";
import SampleQueue from "./queues/SampleQueue";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");
createBullBoard({
  queues: [new BullAdapter(SampleQueue)],
  serverAdapter: serverAdapter,
});

const app: Express = express();
app.use("/api", apiRouter);

app.use("/admin/queues", serverAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log("Server is start at PORT :", 3000);

  SampleWorker("SampleQueue");

  SampleQueueProducer(
    "SampleJob",
    {
      name: "Tarun",
      company: "Student",
      position: "4th Year",
      locatiion: "Nit Kurukshetra",
    },
    2
  );
  SampleQueueProducer(
    "SampleJob",
    {
      name: "Aman",
      company: "Student",
      position: "4th Year",
      locatiion: "Nit Kurukshetra",
    },
    1
  );
});
