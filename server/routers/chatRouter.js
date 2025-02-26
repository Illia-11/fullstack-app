const chatRouter = require("express").Router();
const ChatController = require("../controllers/chatController");

chatRouter.post("/", ChatController.createChat);

chatRouter.post("/addUser", ChatController.addUserToChat);

chatRouter.get("/:userId/chats", ChatController.getUserChats);

module.exports = chatRouter;