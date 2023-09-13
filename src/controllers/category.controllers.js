import Category from '../models/Category.js';
import catchError from '../utils/catchError.js';

export const getAll = catchError(async(req, res) => {
    const categories = await Category.findAll();
    return res.json(categories);
});

export const create = catchError(async(req, res) => {
    const { name } = req.body;
    const category = await Category.create({ name });
    return res.status(201).json(category);
});

