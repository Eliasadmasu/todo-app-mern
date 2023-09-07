import { Router } from "express";
import { TodoAdd } from "../controllers/todoController.js";

const router = Router();

router.route("/addtodo").post(TodoAdd);

export default router;
