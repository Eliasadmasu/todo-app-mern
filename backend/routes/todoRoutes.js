import { Router } from "express";
import {
  TodoAdd,
  deleteTodo,
  getTodo,
  todoUpdate,
  // verifyToken,
} from "../controllers/todoController.js";
import { login, register } from "../controllers/authController.js";
import { verifytoken } from "../middleware/verifytoken.js";

const router = Router();

router.route("/addtodo").post(verifytoken, TodoAdd);

router.route("/todos").get(getTodo);

router.route("/deletetodo/:id").delete(deleteTodo);

router.route("/updatetodo/:id").put(todoUpdate);
// authentication
router.route("/register").post(register);

router.route("/login").post(login);
export default router;
