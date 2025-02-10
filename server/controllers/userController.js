const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body: userData } = req;

    const user = await User.create(userData);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findById(userId);

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;

    const user = await User.findByIdAndUpdate({ id: userId }, body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findByIdAndDelete(userId);

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
