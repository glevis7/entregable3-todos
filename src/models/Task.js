
import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Task = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    // userId
});

export default Task;