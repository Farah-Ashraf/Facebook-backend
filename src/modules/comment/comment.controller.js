import User from "../../../db/model/user.model.js";
import Post from "../../../db/model/post.model.js";
import Comment from "../../../db/model/comment.model.js";

//add comment
export const addComment = async (req,res,next) => {
    const { content, UserId, PostId } = req.body;

    //check for user
    const user = await User.findOne({ where: {id: UserId , loginstatus: true} });
    if(!user){
        return res.json({ message: "User not found", success: false });
    }
    const comment = await Comment.create({content, UserId, PostId });
      res.json({ message: "Comment created successfully" , comment });
    
}

//get all comments
export const getAllComments = async (req,res,next) => {
    const comments = await Comment.findAll();
    res.json({ message: "All comments returned successfully", comments });

}

//update comment
export const updateComment = async (req,res,next) => {
    const{ id } = req.query;
    const { content, UserId } = req.body;

    // to check that the comment id is found and the user itself update it
    const comment = await Comment.update({ content }, { where: { id ,UserId} });

    if(comment > 0){
        return res.json({ message:"Comment updated successfully" });
    }
    return res.json({ message:"Comment not found" });
}

//delete comment
export const deleteComment = async (req,res,next) => {
    const { id } = req.query;
    const {  UserId } = req.body;

    const deletedComment = await Comment.destroy( { where: { id ,UserId} });
    if(deletedComment > 0){
        return res.json({ message:"Comment deleted successfully" });
    }
    return res.json({ message:"Comment not found" });

}

//get users with their posts and comments
export const getUsersPostsComments = async (req,res,next) => {
    const users = await User.findAll({
        include: {
            model: Post,
            include:{
                model: Comment,
                attributes: ['content']
            }
        }
    });

        return res.json({ message:"Users with their posts and commnets returned successfully" , users });
}

