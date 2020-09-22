const userModel = require("../models/userModel");

const getAllUsers = async() => {
    return await userModel.findAllUsers();
}

module.exports = {
    getAllUsers
}