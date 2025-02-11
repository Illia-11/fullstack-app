const authRouter = require("express").Router();
const AuthController = require("../controllers/authController");
const { imagesUpload } = require("../utils/multer");
const { loginMW, createUserValidationMW } = require("../middlewares/usersMW");

authRouter.post(
  "/registration",
  imagesUpload.single("imgSrc"),
  createUserValidationMW,
  AuthController.registration
);

authRouter.post("/login", loginMW, AuthController.login);

module.exports = authRouter;
