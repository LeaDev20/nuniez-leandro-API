const userModel = require("../models/userModel");

const getAllUsers = async() => {
    return await userModel.findAllUsers();
}

const getUser = async(name) => {
    return await userModel.findUser(name);
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

const deleteUser = async(name) => {
    return await userModel.deleteUser(name);
}

const addNewSongToUser = async(name, songId) => {
    return await userModel.addNewSongToUser(name, songId);
}

const deleteSongToLikedSong = async(name, songId) => {
    return await userModel.deleteSongToLikedSong(name, songId);
}

module.exports = {
    getAllUsers,
    getUser,
    addNewUser,
    updateUser,
    deleteUser,
    addNewSongToUser,
    deleteSongToLikedSong
}