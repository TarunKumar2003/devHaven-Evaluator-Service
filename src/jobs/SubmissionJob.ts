import { Job } from "bullmq";
import { IJob } from "../types/bullMqJobDefinition";
import { SubmissionPayload } from "../types/submissionPayload";
export default class SubmissionJob implements IJob {
  name: string;
  payload?: Record<string, SubmissionPayload>;

  constructor(payload: Record<string, SubmissionPayload>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  handle = async () => {};
  failed = async (job?: Job): Promise<void> => {
    console.log("Job failed");
    if (job) {
      console.log(job.id);
    }
  };
}
