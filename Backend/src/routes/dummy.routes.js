import { Router } from "express";
import { dataSent } from "../controllers/datasent.controller.js";

const router = Router();

router.route("/customer-quotes").post(dataSent);

export default router;
