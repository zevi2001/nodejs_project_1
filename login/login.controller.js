import users from './login.services.js'

const addUser = async (req, res) => {
    try {
      const { id, email, password, isAdmin } =
        req.body;
      const newUser = {
        id,
        email,
        password,
        isAdmin,
      };
      const addData = await users.addUser(newUser);
      res.status(200).send("user added ");
    } catch (error) {
      console.error(error);
    }
  };


export default {addUser}
