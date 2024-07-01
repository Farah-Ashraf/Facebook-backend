import { Router } from "express";
import { addPost, deletePost, getPosts, getUserPost, updatePost } from "./post.controller.js";
const postRouter = Router()
//add post
postRouter.post('/post' , addPost)
//get all posts
postRouter.get('/allPosts' , getPosts)
//update Post
postRouter.put('/updatePost', updatePost)
//delete post
postRouter.delete('/deletePost', deletePost)
//get posts of specific user
postRouter.get('/userPost' , getUserPost)
//expport default
export default postRouter