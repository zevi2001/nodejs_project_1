import permission from './permission.controller.js'

const isAdmin = async (req, res, next) => {
  try {
    const exist =await permission.allUsers;
    if (exist) {
        next();
      } else {
        res.status(400).send("not admin or user");
      }
  } catch (err) {
    res.send(err);
  }
};
const allUsers = async (req, res, next) => {
  try {
    const exist =await permission.allUsers;
    if (exist) {
        next();
      } else {
        res.status(400).send("not admin");
      }
  } catch (err) {
    res.send(err);
  }
};
const userByAdminOrUser = async (req, res, next) => {
  try {
    const exist =await permission.userByAdminOrUser;
    if (exist) {
        next();
      } else {
        res.status(400).send("not admin or user");
      }
  } catch (err) {
    res.send(err);
  }
};
const editByAdminOrUser = async (req, res, next) => {
  try {
    const exist =await permission.editByAdminOrUser;
    if (exist) {
        next();
      } else {
        res.status(400).send("not admin or user");
      }
  } catch (err) {
    res.send(err);
  }
};
const deleteByUserOrAdmin = async (req, res, next) => {
  try {
    const exist =await permission.deleteByUserOrAdmin;
    if (exist) {
        next();
      } else {
        res.status(400).send("not admin or user");
      }
  } catch (err) {
    res.send(err);
  }
};

 export default {isAdmin,allUsers,userByAdminOrUser,editByAdminOrUser,deleteByUserOrAdmin}