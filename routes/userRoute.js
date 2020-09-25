const userController = require("../controller/userController");

const findAllUsers = async(req, res) => {
    try{
        const users = await userController.getAllUsers();
        if(users.length > 0) {
          res.send(users);
        }
        res.send("No hay usuarios");
      } catch(e) {
        res.status(500).send("Error interno del servidor")
        throw e;
    }
}

const addNewUser = async(req, res) => {
    try {
      const userBody = req.body;
      const newUser = await userController.addNewUser(userBody);
      if(newUser) {
        res.status(404).send(newUser);
      } else {
        res.status(201).send("Se agregó el usuario");
      }
    } catch(e) {
      throw e;
    }
}

const updateUser = async(req, res) => {
  try {
    const name = req.params.user;
    const userBody = req.body;
    const userUpdated = await userController.updateUser(name, userBody);
    if (userUpdated){
      res.status(404).send("No se pudo actualizar el user");
    } else {
      res.status(201).send("Se actualizó el user");
    }
  } catch (e) {
    throw e;
  }
} 

module.exports = {
    findAllUsers,
    addNewUser,
    updateUser
}