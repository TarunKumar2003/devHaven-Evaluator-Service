import express, { Express } from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";
import SampleQueueProducer from "./producers/SampleQueueProducer";
const app: Express = express();

app.use("/api", apiRouter);
app.listen(serverConfig.PORT, () => {
  console.log("Server is start at PORT :", 3000);

  SampleWorker("SampleQueue");

  SampleQueueProducer("SampleJob", {
    name: "Tarun",
    company: "Student",
    position: "4th Year",
    locatiion: "Nit Kurukshetra",
  });
});
