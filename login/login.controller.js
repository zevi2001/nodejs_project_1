import users from "./login.services.js";

const addUser = async (req, res) => {
  try {
    const { id, email, password, isAdmin } = req.body;
    const newUser = {
      id,
      email,
      password,
      isAdmin,
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
