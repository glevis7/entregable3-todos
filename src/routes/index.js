import express from 'express';
import userRouter from './user.router.js';
import categoryRouter from './category.router.js';
import taskRouter from './task.router.js';
const router = express.Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/tasks', taskRouter);


export default router;