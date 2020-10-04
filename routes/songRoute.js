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

const findSong = async(req, res) => {
  try{
    const name = req.params.nameSong;
    const song = await songController.getSong(name);
    if(song.length > 0) {
      res.send(song);
    }
    res.send("La canción no existe");
  } catch(e) {
    res.status(500).send("Error interno del servidor")
    throw e;
  }
}

const addNewSong = async(req, res) => {
  try {
    const songBody = req.body;
    const newSong = await songController.addNewSong(songBody);
    if(newSong) {
      res.status(404).send(newSong);
    } else {
      res.status(201).send("Se agregó la song");
    }
  } catch(e) {
    throw e;
  }
}

const updateSong = async(req, res) => {
  try {
    const name = req.params.nameSong;
    const songBody = req.body;
    const songUpdated = await songController.updateSong(name, songBody);
    if (songUpdated){
      res.status(404).send("No se pudo actualizar la song");
    } else {
      res.status(201).send("Se actualizó la song");
    }
  } catch (e) {
    throw e;
  }
} 

const deleteSong = async(req, res) => {
  try {
    const name = req.params.nameSong;
    songController.deleteSong(name);
    res.send("Cancion eliminada");
  } catch (e) {
    throw e;
  }
}

module.exports = {
    findAllSongs,
    findSong,
    addNewSong,
    updateSong,
    deleteSong
}