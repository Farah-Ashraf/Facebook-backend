import Post from "../../../db/model/post.model.js";
import User from "../../../db/model/user.model.js";

//add post
export const addPost = async (req,res,next) => {
    const { title, content, UserId} = req.body;
    //check for user
    const user = await User.findOne({ where: {id: UserId , loginstatus: true} });
    if(!user){
        return res.json({ message: "User not found", success: false });
    }
    const post = await Post.create({ title, content, UserId });
    res.json({ message: "post created successfully" , post });
}

//get all posts
export const getPosts = async (req,res,next) => {
    const posts = await Post.findAll();
    res.json({ message: "posts returned successfully" , posts });
}

//update post
export const updatePost = async (req,res,next) => {
    const{ id } = req.query;
    const { title, UserId } = req.body;

    // to check the the post id is found and the user itself update it
    const post = await Post.update({ title }, { where: { id ,UserId} });

    if(post > 0){
        return res.json({ message:"Post updated successfully" });
    }
    return res.json({ message:"Post not found" });
}

//delete post
export const deletePost = async (req,res,next) => {
    const { id } = req.query;
    const { title, UserId } = req.body;

    const deletedPost = await Post.destroy( { where: { id ,UserId} });
    if(deletedPost > 0){
        return res.json({ message:"Post deleted successfully" });
    }
    return res.json({ message:"Post not found" });

}

//get user and it's post
export const getUserPost = async (req,res,next) => {
    const { UserId } = req.query;
    const post = await Post.findAll({
        where: { UserId },
        include: {
            model: User,
            attributes: { exclude: ['password'] }
        }
    });

    if( post.length > 0){
        return res.json({ message:"Post returned successfully" , post });
    }
    return res.json({ message:"There is no Posts for that user" });
}


