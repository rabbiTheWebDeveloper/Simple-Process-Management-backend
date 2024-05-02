"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRoutes = void 0;
const express_1 = __importDefault(require("express"));
const process_controller_1 = require("./process.controller");
const router = express_1.default.Router();
router.post("/create-process", process_controller_1.ProcessController.insertIntoDB);
exports.processRoutes = router;
