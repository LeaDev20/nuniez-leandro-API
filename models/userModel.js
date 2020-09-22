const mongoose = require('mongoose');

//Schema

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    lastname: String,
    mail: String,
    age: Number
}) 

let User = mongoose.model('User', userSchema);

//Logic

const findAllUsers = async() => {
    const users = await User.find({});
    return users;
}

module.exports = {
    findAllUsers
}