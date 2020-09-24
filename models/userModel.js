const mongoose = require('mongoose');
const songModel = require('../models/songModel')

//Schema

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    lastname: String,
    mail: String,
    age: Number,
    likedSongs: [{ type: Schema.ObjectId, ref: "Song" }]
}) 

let User = mongoose.model('Users', userSchema, 'user');

//Logic

const findAllUsers = async() => {
    const users = await User.find({}).populate("likedSongs");
    return users;
}

module.exports = {
    findAllUsers,
}