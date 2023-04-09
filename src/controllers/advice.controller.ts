import path from "node:path";

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getAdvice = async (req: Request, res: Response) => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const jsonData = await response.json();
  console.log(jsonData);
  res.status(StatusCodes.OK).json(jsonData);
};
