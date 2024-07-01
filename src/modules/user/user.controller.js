import bcrypt from "bcrypt";
import User from "../../../db/model/user.model.js";
//registration
export const addUser = async (req,res,next) => {

    const {userName,email,password} = req.body;
    
    //check existence
    const userExist = await User.findOne({ where: { email: email}});
    if (userExist){
        return res.json({message: "user already exist", success: false});
    }
    const hashpassword = bcrypt.hashSync(password,10);
    const user = await User.create({userName, email, password: hashpassword});
    res.json({ message:"User Created Successfully", user  })

}
//login
export const login = async (req,res,next) => {
    const {email,password} = req.body;
    const user = await User.findOne({ where: {email}});
    if (!user){
        return res.json({message: "user not found", success: false});
    }
    const ispasswordValid = bcrypt.compareSync(password, user.password);
    if(!ispasswordValid){
        return res.json({message: "invalid password", success: false});
    }
    const loginStatus = await user.update({ loginStatus: true });
    res.json({message:"user logged in successfully", user});

}
//logout
export const logout = async (req,res,next) => {
    const {id} = req.query;
    const loginStatus = await User.update(
        {loginStatus: false},
        {where: {id}}
    );
    res.json({message: "user logged out successfully", loginStatus});
}