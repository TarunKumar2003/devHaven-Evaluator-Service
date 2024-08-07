// import Docker from "dockerode";
// import { TestCases } from "../types/testCases";
// import { PYTHON_IMAGE } from "../utils/";
import createContainer from "./containerFactory";
import { PYTHON_IMAGE } from "../utils/constants";

[];
async function runPython(code: string) {
  const pythonDockerContainer = await createContainer(PYTHON_IMAGE, [
    "python3",
    "-c",
    code,
    "stty-echo",
  ]);
  await pythonDockerContainer.start();
  console.log("starting the docker container");

  return pythonDockerContainer;
}

export default runPython;
