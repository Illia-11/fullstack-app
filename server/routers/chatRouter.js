const chatRouter = require("express").Router();
const ChatController = require("../controllers/chatController");

chatRouter.post("/", ChatController.createChat);

chatRouter.post("/adduser", ChatController.addUserToChat);

chatRouter.get("/user/:userId", ChatController.getUserChats);

module.exports = chatRouter;