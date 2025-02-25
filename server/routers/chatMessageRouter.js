const chatMessageRouter = require("express").Router();
const ChatMessageController = require("../controllers/chatMessageController");

chatMessageRouter.post("/", ChatMessageController.createMessage);

chatMessageRouter.get("/:chatId", ChatMessageController.getChatMessages);

module.exports = chatMessageRouter;