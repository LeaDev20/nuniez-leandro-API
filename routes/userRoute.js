const userController = require("../controller/userController");

const findAllUsers = async(req, res) => {
    try{
        const users = await userController.getAllSongs();
        if(users.length > 0) {
          res.send(users);
        }
        res.send("No hay usuarios");
      } catch(e) {
        res.status(500).send("Error interno del servidor")
        throw e;
    }
}

module.exports = {
    findAllUsers
}