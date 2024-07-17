import { Request, Response } from "express";

export const pingController = (_: Request, res: Response) => {
  res.status(200).json({
    message: "ping is Ok",
  });
};
