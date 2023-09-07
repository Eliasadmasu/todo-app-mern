import { Router } from "express";
import { TodoAdd, deleteTodo, getTodo } from "../controllers/todoController.js";

const router = Router();

router.route("/addtodo").post(TodoAdd);

router.route("/todos").get(getTodo);

router.route("/deletetodo/:id").delete(deleteTodo);
export default router;
