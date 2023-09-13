
import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define('user', {

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default User;