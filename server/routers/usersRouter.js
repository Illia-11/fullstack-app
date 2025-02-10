const userRouter = require("express").Router();
const UsersController = require("../controllers/userController");
const {
  validateUserRegistration,
  validateUserUpdate,
} = require("../middlewares/validationMW");

userRouter
  .route("/")
  .post(validateUserRegistration, UsersController.createUser)
  .get(UsersController.getUsers);

userRouter
  .route("/:userId")
  .get(UsersController.getUser)
  .put(validateUserUpdate, UsersController.updateUser)
  .delete(UsersController.deleteUser);

module.exports = userRouter;
