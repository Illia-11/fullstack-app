const authRouter = require("express").Router();
const AuthController = require("../controllers/authController");
const { imagesUpload } = require("../utils/multer");
const { loginMW, registrationMW } = require("../middlewares/authMW");

authRouter.post(
  "/registration",
  imagesUpload.single("imgSrc"),
  registrationMW,
  AuthController.registration,
);

authRouter.post("/login", loginMW, AuthController.login);

authRouter.post("/refresh", AuthController.refreshSession);


module.exports = authRouter;
