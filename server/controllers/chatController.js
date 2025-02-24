const { Chat } = require("../db/models");

module.exports.createChat = async (req, res, next) => {
  try {
    const { body } = req;

    const chat = await Chat.create(body);

    res.status(201).send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.getChats = async (req, res, next) => {
  try {
    const { pagination } = req;

    const chats = await Chat.findAll({ ...pagination });

    res.status(200).send({ data: chats });
  } catch (error) {
    next(error);
  }
};

module.exports.getChat = async (req, res, next) => {
  try {
    const { chat } = req;

    res.status(200).send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteChat = async (req, res, next) => {
  try {
    const { chat } = req;

    await chat.destroy();

    res.status(200).send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.updateChat = async (req, res, next) => {
  try {
    const { chat, body } = req;

    const updatedChat = await chat.update(body);

    res.status(200).send({ data: updatedChat });
  } catch (error) {
    next(error);
  }
};
