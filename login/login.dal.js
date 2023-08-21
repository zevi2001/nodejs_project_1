import users from './loginData.json' assert {type: 'json'}

const addUser=async (data)=>{
    users.push(data)
    return users;
}
const findUser=async ()=>{
    return users;
}
export default {addUser,findUser}
