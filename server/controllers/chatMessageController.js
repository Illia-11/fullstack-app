const { ChatMessage, User, Chat } = require("../db/models");

module.exports.createMessage = async (req, res, next) => {
  try {
    const {
      body: { chatId, userId, body },
    } = req;

    const chat = await Chat.findByPk(chatId);

    const user = await User.findByPk(userId);

    if (!chat) {
      throw new Error("Chat is not found");
    }

    if (!user) {
      throw new Error("User is not found");
    }

    const mess = await ChatMessage.create({ chatId, userId, body });

    res.status(201).send({ data: mess });
  } catch (error) {
    next(error);
  }
};

module.exports.getChatMessages = async (req, res, next) => {
  try {
    const {
      params: { chatId },
    } = req;

    const chat = await Chat.findByPk(chatId);

    if (!chat) {
      throw new Error("Chat is not found");
    }

    const messages = await chat.getChat_messages();

    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
};