import users from "./permission.services.js";
const checkAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = {
      email,
      password,
    };
    const findAdmin = await users.checkAdmin(user);
    if (findAdmin) {
      res.status(200).send("admin ok ");
    } else {
      res.status(400).send("not admin");
    }
  } catch (error) {
    console.error(error);
  }
};
const allUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = {
      email,
      password,
    };
    const fallUsers = await users.allUsers(user);
    console.log(fallUsers)
    if (fallUsers) {
      res.status(200).send(fallUsers);
    } else {
      res.status(400).send("not admin");
    }
  } catch (error) {
    console.error(error);
  }
};
export default { checkAdmin, allUsers };
