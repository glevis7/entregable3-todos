
import { create, getAll } from "../controllers/user.controllers.js";
import express from 'express';

const userRouter = express.Router();

userRouter.route("/")
	.get(getAll)
	.post(create)

export default userRouter;
