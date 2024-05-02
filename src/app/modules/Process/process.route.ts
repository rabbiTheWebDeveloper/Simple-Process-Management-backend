import express from "express";
import { ProcessController } from "./process.controller";
import { auth } from "../../middleware/AuthVerifyMiddleware";

const router = express.Router();
router.post("/create-process", ProcessController.insertIntoDB);



export const processRoutes = router;
