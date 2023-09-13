
import { create, getAll, remove, update } from "../controllers/task.controllers.js";
import express from 'express';

const taskRouter = express.Router();

taskRouter.route("/")
    .get(getAll)
	.post(create)

taskRouter.route('/:id')
    .delete(remove)
    .put(update)

export default taskRouter;
