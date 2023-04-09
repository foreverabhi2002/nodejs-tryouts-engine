import { Router } from "express";

import { getAdvice } from "../controllers";
const router = Router();

router.route("/advice").get(getAdvice);

export default router;