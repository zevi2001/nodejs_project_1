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
    const allUsers = await users.allUsers(user);
    console.log(allUsers)
    if (allUsers) {
      res.status(200).send(allUsers);
    } else {
      res.status(400).send("not admin");
    }
  } catch (error) {
    console.error(error);
  }
};
const userByAdminOrUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = {
      email,
      password,
    };
    const allUsers = await users.userByAdminOrUser(user);
    console.log(allUsers)
    if (allUsers) {
      res.status(200).send(allUsers);
    } else {
      res.status(400).send("not admin");
    }
  } catch (error) {
    console.error(error);
  }
};
const editByUser = async (req, res) => {
  try {
    const { id,email, password ,isAdmin} = req.body;
    const user = {
      id,
      email,
      password,
      isAdmin
    };
    const editUser = await users.editByUser(user);
    console.log(editUser)
    if (editUser) {
      res.status(200).send(editUser);
    } else {
      res.status(400).send("cant edit");
    }
  } catch (error) {
    console.error(error);
  }
};
const deleteByUserOrAdmin = async (req, res ,next) => {
  try {
    const { id,email, password ,isAdmin} = req.body;
    const user = {
      id,
      email,
      password,
      isAdmin
    };
    const editUser = await users.deleteByUserOrAdmin(user);
    console.log(editUser)
    if (editUser) {
      res.status(200).send(editUser);
      next();
    } else {
      res.status(400).send("cant delete");
    }
  } catch (error) {
    console.error(error);
  }
};

export default { checkAdmin, allUsers ,userByAdminOrUser ,editByUser,deleteByUserOrAdmin};
