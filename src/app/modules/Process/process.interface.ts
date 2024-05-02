import { Types } from "mongoose";
export interface IProcess extends Document {
  PID: number;
  creationTime: Date;
  logs: Date[];
  timestamp: Date;
  
}