import { Router } from "express";
import { addUser, login, logout } from "./user.controller.js";
const userRouter = Router()
//sign up
userRouter.post('/user' , addUser)
// sign in
userRouter.post('/login' , login)
//logout
userRouter.patch('/logout',logout)

//expport default
export default userRouter