import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/creatuser", UserController.createUser);

export { router };
