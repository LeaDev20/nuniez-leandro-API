const mongoose = require('mongoose');

//Schema

const Schema = mongoose.Schema;

let songSchema = new Schema({
    name: String,
    album: String,
    duration: String,
    artist: String
}) 

let Song = mongoose.model('Song', songSchema, 'song');

//Logic

const findAllSongs = async() => {
    const songs = await Song.find({});
    return songs;
}

const addNewSong = async(songBody) => {
    const newSong = await new Song(songBody);
    newSong.save();
}

const updateSong = async(name, songBody) => {
    const songUpdate = await Song.findOneAndUpdate({name: name}, songBody);
    songUpdate.save();
}

module.exports = {
    findAllSongs,
    addNewSong,
    updateSong
}