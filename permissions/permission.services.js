import users from "./permission.dal.js";

const checkAdmin = async (data) => {
  const checkUser = await users.getData();
  let check = false;
  for (let i = 0; i < checkUser.length; i++) {
    if (
      checkUser[i].email == data.email &&
      checkUser[i].password == data.password &&
      checkUser[i].isAdmin == true
    ) {
      check = true;
    }
  }
  return check;
};
const allUsers = async (data) => {
  const checkUser = await users.getData();
  for (let i = 0; i < checkUser.length; i++) {
    if (
      checkUser[i].email == data.email &&
      checkUser[i].password == data.password &&
      checkUser[i].isAdmin == true
    ) {
      return checkUser;
    }
  }
};
const userByAdminOrUser = async (data) => {
  const checkUser = await users.getData();
  for (let i = 0; i < checkUser.length; i++) {
    if (
      (checkUser[i].email == data.email &&
        checkUser[i].password == data.password &&
        checkUser[i].isAdmin == true) ||
      (checkUser[i].email == data.email &&
        checkUser[i].password == data.password)
    ) {
      return checkUser[i];
    }
  }
};
const editByUser = async (data) => {
  const checkUser = await users.getData();
  for (let i = 0; i < checkUser.length; i++) {
    if (checkUser[i].id == data.id) {
      checkUser[i].email = data.email;
      checkUser[i].password = data.password;
      checkUser[i].isAdmin = data.isAdmin;
      return checkUser[i];
    }
  }
};
const deleteByUserOrAdmin = async (data) => {
  const checkUser = await users.getData();
  for (let i = 0; i < checkUser.length; i++) {
    if (
      (checkUser[i].email == data.email &&
        checkUser[i].password == data.password &&
        checkUser[i].isAdmin == true &&
        checkUser[i].id == data.id) ||
      (checkUser[i].email == data.email &&
        checkUser[i].password == data.password &&
        checkUser[i].id == data.id)
    ) {
      checkUser.splice(i, 1);
      return checkUser;
    }
  }
};

export default {
  checkAdmin,
  allUsers,
  userByAdminOrUser,
  editByUser,
  deleteByUserOrAdmin,
};
