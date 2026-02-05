import { hashpassword, passwordCheck } from '../utils/hash.js';

import authUserModel from '../Model/authUserModel.js';

import { createToken } from '../utils/token.js';

export const authSignup = async (req, res) => {
  try{
    //password = moh
  const {name, email, password, role} = req.body;

  const checkEmail = await authUserModel.UserLoginModel(email);

  if(checkEmail){
    return res.status(400).json({message:"Invalid credentials"});//error: err.message
  }

  const newPassword = await hashpassword(password);

  const id = await authUserModel.UserSignUpModel(
    {
      name,
      email,
      password: newPassword,
      role: role || "user"
      })

        res.status(201).json({message:"User has been created",
          userId: id
        })
      
}

  catch(err){
    res.status(500).json({message:"Server Error",error:err.message});
  }

}

export const authLogin = async (req, res) => {
  try{
    const {email, password} = req.body;
    const user = await authUserModel.UserLoginModel(email);
    if(!user){
      return res.status(400).json({message:"Invalid credentials "});
    }
    const userPassword = await passwordCheck(password, user.password);
    if(!userPassword){
      return res.status(400).json({
        message:"wrong password"
      }) 
  } 
  const token = createToken({
    id: user.id,
    role: user.role
  })
  res.status(200).json({
    message:"Login successfully",
    token
  })
}
catch (err){
    res.status(500).json({
      message:"Server Error", error: err.message
    })
  }
  }
