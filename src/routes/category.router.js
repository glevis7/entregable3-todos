
import { create, getAll } from "../controllers/category.controllers.js";
import express from 'express';

const categoryRouter = express.Router();

categoryRouter.route("/")
    .get(getAll)
	.post(create)

export default categoryRouter;
