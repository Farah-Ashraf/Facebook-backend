import { DataTypes } from "sequelize";
import { sequlizeInstance } from "../conection.js";

const User = sequlizeInstance.define("User" , {
    id:{
        type:DataTypes.INTEGER(15),
        primaryKey: true,
        autoIncrement: true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    loginStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },    
},

{
    timestamps:true
}

);

console.log(sequlizeInstance.models.User);

export default User;