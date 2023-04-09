import path from "node:path";

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getRestData = async (req: Request, res: Response) => {
  const response = await fetch("https://retoolapi.dev/TZdgw3/data");
  const jsonData = await response.json();
  console.log(jsonData);
  res.status(StatusCodes.OK).json(jsonData);
};
