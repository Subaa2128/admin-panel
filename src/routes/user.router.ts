import express from "express";
import { logIn, signIn } from "../controllers/user.controller";

const routes = express.Router();

routes.post("/login", logIn);
routes.post("/signin", signIn);

export default routes;
