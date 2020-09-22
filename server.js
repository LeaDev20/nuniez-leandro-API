const express = require("express");
const mongoose = require("mongoose");
const songRoute = require("./routes/songRoute");
const userRoute = require("./routes/userRoute");

mongoose.connect('mongodb+srv://Leandro-matea:52766735@prueba-db.mzltp.mongodb.net/final_API?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion'));
db.once('open', function() {
  console.log("MongoDB conecting with Express");
});

const server = express();
server.use(express.json());


server.get("/songs",songRoute.findAllSongs());
server.get("/songs",userRoute.findAllUsers());


server.listen(5000);