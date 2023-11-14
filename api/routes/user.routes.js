import express from "express"; 
import { test } from "../controllers/user.controllers.js";

const routes = express.Router();

routes.get('/', test)

export default routes;