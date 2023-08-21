import users from './login.dal.js'

const addUser=async(data)=>{
    users.addUser(data)
    return users;
}

export default {addUser}
