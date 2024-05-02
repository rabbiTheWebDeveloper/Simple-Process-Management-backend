"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessModel = void 0;
const mongoose_1 = require("mongoose");
const processSchema = new mongoose_1.Schema({
    PID: Number,
    creationTime: Date,
    logs: [Date],
    timestamp: { type: Date, default: Date.now }
});
exports.ProcessModel = (0, mongoose_1.model)("process", processSchema);
