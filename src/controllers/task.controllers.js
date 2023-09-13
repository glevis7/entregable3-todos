import Category from '../models/Category.js';
import Task from '../models/Task.js';
import catchError from '../utils/catchError.js';

export const getAll = catchError(async(req, res) => {
    const { userId } = req.query;
    const where = {};
    if (userId) where.userId = userId;
    const tasks = await Task.findAll({ include: [ Category ], where });
    return res.json(tasks);
})

export const create = catchError(async(req, res) => {
    const { title, description, completed, userId, categoriesIds } = req.body;
    if (!categoriesIds) return res.status(400).json({ categoriesIds: "This value cannot be null" });
    if (!userId) return res.status(400).json({ userId: "This value cannot be null" });
    const task = await Task.create({ title, description, completed, userId });
    await task.setCategories(categoriesIds);
    return res.status(201).json(task);
})

export const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    return res.sendStatus(204);
});

export const update = catchError(async(req, res) => {
    const { title, description, completed } = req.body;
    const { id } = req.params
    const task = await Task.update(
        { title, description, completed }, 
        { where: { id }, returning: true }
    )
    return res.json(task[1][0]);
})
