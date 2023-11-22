import express from "express";
import { test, updateUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const routes = express.Router();

routes.get("/", test);
routes.post("/update/:id", verifyToken, updateUser);

export default routes;
