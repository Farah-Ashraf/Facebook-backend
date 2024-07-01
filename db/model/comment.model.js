import { DataTypes } from "sequelize";
import { sequlizeInstance } from "../conection.js";
import Post from "./post.model.js";
import User from "./user.model.js";

const Comment = sequlizeInstance.define("Comment" , {
    id:{
        type:DataTypes.INTEGER(15),
        primaryKey: true,
        autoIncrement: true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },    
},

{
    timestamps:true
}

);

User.hasMany(Comment ,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
});
Comment.belongsTo(User);

Post.hasMany(Comment,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
Comment.belongsTo(Post)



export default Comment;