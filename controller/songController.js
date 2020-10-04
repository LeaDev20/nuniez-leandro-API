const songModel = require("../models/songModel");

const getAllSongs = async() => {
    return await songModel.findAllSongs();
}

const getSong = async(name) => {
    return await songModel.findSong(name);
}

const addNewSong = async(songBody) => {
    if(songBody.name && songBody.album && songBody.duration && songBody.artist){
        return await songModel.addNewSong(songBody);
    }
    return "No se cumple con el formato"
}

const updateSong = async(name, songBody) => {
    return await songModel.updateSong(name, songBody);
}

const deleteSong = async(name) => {
    return await songModel.deleteSong(name);
}

module.exports = {
    getAllSongs,
    getSong,
    addNewSong,
    updateSong,
    deleteSong
}