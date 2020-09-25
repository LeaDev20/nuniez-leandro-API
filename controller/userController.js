const userModel = require("../models/userModel");

const getAllUsers = async() => {
    return await userModel.findAllUsers();
}

const addNewUser = async(userBody) => {
    if(userBody.name && userBody.lastname && userBody.mail && userBody.age){
        return await userModel.addNewUser(userBody);
    }
    return "No se cumple con el formato"
}

const updateUser = async(name, userBody) => {
    return await userModel.updateUser(name, userBody);
}

module.exports = {
    getAllUsers,
    addNewUser,
    updateUser
}