const express = require("express");
const mongoose = require("mongoose");
const songRoute = require("./routes/songRoute");
const userRoute = require("./routes/userRoute");

mongoose.connect('mongodb+srv://Leandro-matea:52766735@prueba-db.mzltp.mongodb.net/final_API?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion'));
db.once('open', function() {
  console.log("MongoDB conecting with Express");
});

const server = express();
server.use(express.json());

server.route("/songs")
  .get(songRoute.findAllSongs)
  .post(songRoute.addNewSong)

server.route("/users")
  .get(userRoute.findAllUsers)
  .post(userRoute.addNewUser)

server.route("/:song")
  .put(songRoute.updateSong)
  .delete()

server.route("/:user")
  .put(userRoute.updateUser)
  .delete()

server.listen(5000);