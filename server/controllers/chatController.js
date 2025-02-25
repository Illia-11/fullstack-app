const { Chat, User } = require("../db/models");

module.exports.createChat = async (req, res, next) => {
  try {
    const {
      body,
      body: { userId },
    } = req;

    const users = await User.findAll({ where: { id: userId } });

    const chat = await user.createChat(body);

    await chat.addUsers(users);

    res.status(201).send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.addUserToChat = async (req, res, next) => {
  try {
    const {
      body: { chatId, userId },
    } = req;

    const chat = await Chat.findByPk(chatId);

    const user = await User.findByPk(userId);

    if (!chat) {
      throw new Error("Chat is not found");
    }

    if (!user) {
      throw new Error("User is not found");
    }

    res.status(200).send({ message: `${user} added to chat` });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserChats = async (req, res, next) => {
  try {
    const { params: userId } = req;

    const user = await User.findByPk(userId);

    const chats = await user.getChats();

    res.status(200).send({ data: chats });
  } catch (error) {
    next(error);
  }
};
