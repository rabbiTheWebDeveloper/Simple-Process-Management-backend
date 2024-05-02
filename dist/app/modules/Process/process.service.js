"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processservice = void 0;
const process_model_1 = require("./process.model");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const generateID_1 = require("../../utlis/generateID");
const insertIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProcess = new process_model_1.ProcessModel({
            PID: (0, generateID_1.generatePID)(),
            creationTime: new Date(),
            logs: []
        });
        yield newProcess.save();
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            newProcess.logs.push(new Date());
            yield newProcess.save();
        }), 1 * 60 * 1000);
        return {
            PID: newProcess.PID,
            creationTime: newProcess.creationTime,
        };
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, error);
    }
});
exports.Processservice = {
    insertIntoDB,
};
