//import modules
import express from 'express'
import { db_connection } from './db/conection.js';
import postRouter from './src/modules/post/post.routes.js';
import userRouter from './src/modules/user/user.routes.js';
import commentRouter from './src/modules/comment/comment.routes.js';

//create server
const app = express();
const port =3000;
app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)

//connect to db
db_connection()
app.get('/', (req,res) => res.send("server running"));


//listen on the server
app.listen(port , () => console.log("Server is running"));