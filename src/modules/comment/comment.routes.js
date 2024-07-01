import { Router } from "express";
import { addComment, deleteComment, getAllComments, getUsersPostsComments, updateComment } from "./comment.controller.js";
const commentRouter = Router()
//add comment
commentRouter.post('/comment' , addComment)
//get all comments
commentRouter.get('/allComments',getAllComments)
//update comment
commentRouter.put('/updateComment', updateComment)
//delete comment
commentRouter.delete('/deleteComment', deleteComment)
//get users with their comments and posts
commentRouter.get('/getUsersPostsComments', getUsersPostsComments)
//expport default
export default commentRouter