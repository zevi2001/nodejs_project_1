import users from "./login.services.js";
import { check ,validationResult } from "express-validator";
import Joi from "joi";
const addUser = async (req, res) => {
  try {
    const { id, email, password, isAdmin } = req.body;
    const newUser = {
      id ,
      email,
      password,
      isAdmin,
      // id :Joi.number()
      // .min(7)
      // .max(10) ,
      // email : Joi.string()
      // .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      // password :Joi.string()
      // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      // isAdmin,
    };
    
    const addData = await users.addUser(newUser);
    res.status(200).send("user added ");
  } catch (error) {
    console.error("problem with adding user");
  }
};
const findUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = {
      email,
      password,
    };
    const findUser = await users.findUser(user);
    if(findUser){
      res.status(200).send("user find");
    }
    else{
    res.status(400).send("user not find");
    }
  } catch (error) {
    console.error("user not find");
  }
};

export default { addUser, findUser };
