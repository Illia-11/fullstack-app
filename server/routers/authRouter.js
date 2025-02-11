const authRouter = require("express").Router();
const AuthController = require("../controllers/authController");
const { imagesUpload } = require("../utils/multer");
const { createUserValidationMW } = require("../middlewares/usersMW");

authRouter.post(
  "/registration",
  imagesUpload.single("imgSrc"),
  createUserValidationMW,
  AuthController.registration
);

authRouter.post("/login", AuthController.login);

module.exports = authRouter;
