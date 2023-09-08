import { Router } from "express";
import {
  TodoAdd,
  deleteTodo,
  getTodo,
  todoUpdate,
} from "../controllers/todoController.js";
import { register } from "../controllers/authController.js";

const router = Router();

router.route("/addtodo").post(TodoAdd);

router.route("/todos").get(getTodo);

router.route("/deletetodo/:id").delete(deleteTodo);

router.route("/updatetodo/:id").put(todoUpdate);
// authentication
router.route("/register").post(register);
export default router;
