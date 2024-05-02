import { Request, Response } from "express";
import { Processservice } from "./process.service";
import catchAsync from "../../shared/catchAsync";
import sendReponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { IProcess } from "./process.interface";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
 
  // const user = req.headers.id;
  // payload.userId = user;


  const result = await Processservice.insertIntoDB();
  sendReponse<IProcess>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Process Created successfully!",
    data: result,
  });
});




export const ProcessController = {
  insertIntoDB,
};
