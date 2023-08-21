import users from './login.dal.js'

const addUser=async(data)=>{
    users.addUser(data)
    return users;
}
const findUser=async(data)=>{
    const checkUser=await users.addUser()
    checkUser.find((user)=>user.password==data.password&&user.email==data.email)
    return checkUser;
}

export default {addUser,findUser}
