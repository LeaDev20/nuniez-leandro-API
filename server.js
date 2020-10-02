const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const songRoute = require("./routes/songRoute");
const userRoute = require("./routes/userRoute");

mongoose.connect('mongodb+srv://Leandro-matea:52766735@prueba-db.mzltp.mongodb.net/final_API?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion'));
db.once('open', function() {
  console.log("MongoDB conecting with Express");
});

const server = express();
server.use(cors());
server.use(express.json());

server.route("/songs")
  .get(songRoute.findAllSongs)
  .post(songRoute.addNewSong)

server.route("/users")
  .get(userRoute.findAllUsers)
  .post(userRoute.addNewUser)

server.route("/song/:song")
  .put(songRoute.updateSong)
  .delete(songRoute.deleteSong)

server.route("/user/:user")
  .put(userRoute.updateUser)
  .delete(userRoute.deleteUser)

// Agregar/Eliminar canciones a lista de canciones favoritas de un usuario:

server.post("/users/:user/song", userRoute.addSongToLikedSong)
server.delete("/users/:user/:song", userRoute.deleteSongToLikedSong)

server.listen(process.env.PORT);