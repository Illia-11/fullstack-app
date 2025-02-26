const rootRouter = require("express").Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const { checkAccessToken } = require("../middlewares/tokenMW");
const chatRouter = require("./chatRouter");
const chatMessageRouter = require("./chatMessageRouter");

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/users", chatRouter);

rootRouter.use("/chats", chatRouter);
rootRouter.use("/messages", chatMessageRouter);

rootRouter.get("/secret", checkAccessToken, (req, res, next) => {
  res.status(200).send({data: "secret data"})
})

module.exports = rootRouter;
