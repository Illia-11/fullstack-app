const rootRouter = require("express").Router();
const userRouter = require("./usersRouter");

rootRouter.use("/users", userRouter);

module.exports = rootRouter;
