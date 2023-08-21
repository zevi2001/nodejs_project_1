import users from "../login/loginData.json" assert { type: "json" };

const getData = async () => {
  const newUsers=await users
  return newUsers;
};
export default { getData };
