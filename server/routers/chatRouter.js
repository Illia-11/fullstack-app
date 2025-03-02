const chatRouter = require("express").Router();
const ChatMessageController = require("../controllers/chatMessageController")
const ChatController = require("../controllers/chatController");

chatRouter.post("/", ChatController.createChat);

chatRouter.post("/:chatId/", ChatController.addUserToChat);

chatRouter.get("/users/", ChatController.getUserChats);

chatRouter.post("/:chatId/messages", ChatMessageController.createMessage);

chatRouter.get("/:chatId/messages", ChatMessageController.getChatMessages);

module.exports = chatRouter;