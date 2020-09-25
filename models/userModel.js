const mongoose = require('mongoose');

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
    const users = await User.find({}).populate("likedSongs Song");
    return users;
}

const addNewUser = async(userBody) => {
    const newUser = await new User(userBody);
    newUser.save();
}

const updateUser = async(name, userBody) => {
    const userUpdate = await User.findOneAndUpdate({name: name}, userBody);
    userUpdate.save();
}

module.exports = {
    findAllUsers,
    addNewUser,
    updateUser
}