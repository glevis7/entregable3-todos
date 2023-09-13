import User from '../models/User.js';
import catchError from '../utils/catchError.js';

export const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

export const create = catchError(async(req, res) => {
    const {username, email, password} = req.body;
    const user = await User.create({username, email, password})
    return res.status(201).json(user);
});

