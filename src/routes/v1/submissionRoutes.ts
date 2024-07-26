import { Router } from "express";
import { addSubmission } from "../../controller/submissionController";
import { validate } from "../../validators/zodValidator";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";

const submissionRouter = Router();

submissionRouter.post("/", validate(createSubmissionZodSchema), addSubmission);

export default submissionRouter;
