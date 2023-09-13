import Category from "./Category.js";
import Task from "./Task.js";
import User from "./User.js";

User.hasMany(Task);
Task.belongsTo(User);


Task.belongsToMany(Category, { through: "TasksCategories" });
Category.belongsToMany(Task, { through: "TasksCategories" });
