import mongoose, { Schema, Model, model } from "mongoose";
import { IProcess } from "./process.interface";

type processModel = Model<IProcess, Record<string, unknown>>;
const processSchema = new Schema<IProcess>({
  PID: Number,
  creationTime: Date,
  logs: [Date],

  timestamp: { type: Date, default: Date.now }
});
export const ProcessModel = model<IProcess, processModel>("process", processSchema);
