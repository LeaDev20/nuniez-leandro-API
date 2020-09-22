const songController = require("../controller/songController");

const findAllSongs = async(req, res) => {
    try{
        const songs = await songController.getAllSongs();
        if(songs.length > 0) {
          res.send(songs);
        }
        res.send("No hay canciones");
      } catch(e) {
        res.status(500).send("Error interno del servidor")
        throw e;
    }
}

module.exports = {
    findAllSongs
}