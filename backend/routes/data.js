import express from "express";
import * as dataController from "../controllers/dataController.js";

const router = express.Router();

router.post("/esp32", dataController.receiveData);

export default router;
