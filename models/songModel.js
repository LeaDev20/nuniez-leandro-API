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

module.exports = {
    findAllSongs
}