import express from "express";
import {
  test,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const routes = express.Router();

routes.get("/", test);
routes.post("/update/:id", verifyToken, updateUser);
routes.delete("/delete/:id", verifyToken, deleteUser);

export default routes;
