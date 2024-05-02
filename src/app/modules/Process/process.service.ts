import { IProcess } from "./process.interface";
import { ProcessModel } from "./process.model";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { generateTransactionID } from "../../utlis/transactionID";
import { UsersModel } from "../User/user.model";
import { AgentsModel } from "../Agent/agent.model";
import { AdminModel } from "../Admin/admin.model";
import { isToken } from "../../utlis/loginCheck";
import { generatePID } from "../../utlis/generateID";

const insertIntoDB = async (): Promise<any> => {
  try{
    const newProcess  = new ProcessModel({
      PID: generatePID(), // You need to define a function to generate PID
      creationTime: new Date(),
      logs: []
  });
    await newProcess .save();
    setInterval(async () => {
      newProcess.logs.push(new Date());
      await newProcess.save();
  }, 1*60*1000)
    return{
      PID: newProcess.PID,
      creationTime: newProcess.creationTime,
    };
  }catch (error:any) {
    throw new ApiError(httpStatus.BAD_REQUEST, error);
  }

};







export const Processservice = {
  insertIntoDB,
};
