const songModel = require("../models/songModel");

const getAllSongs = async() => {
    return await songModel.findAllSongs();
}

module.exports = {
    getAllSongs
}