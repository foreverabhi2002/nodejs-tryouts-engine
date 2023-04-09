import { Router } from "express";

import { getRestData } from "../controllers";
const router = Router();

router.route("/retool-api").get(getRestData);

export default router;