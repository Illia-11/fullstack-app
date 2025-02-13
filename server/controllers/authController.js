const createHttpError = require("http-errors");
const { User } = require("../db/models");
const bcrypt = require("bcrypt");

module.exports.registration = async (req, res, next) => {
  try {
    const { body, file } = req;

    const user = await User.create({
      ...body,
      imgSrc: file ? file.filename : null,
    });

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    // 1. знайти користувача якого логінимо (ідентифікація)
    const user = await User.findOne({
      where: { email },
    });

    // 1.5. якщо користувач не знайдений відсилаємо 404
    if (!user) {
      throw createHttpError(404, "User with this data not found");
    }

    // 2. перевірити відповідність пароля наявному хешу у БД
    const isSamePassword = await bcrypt.compare(password, user.password);

    // 2.5. кидаємо помилку якщо пароль не збігається
    if (!isSamePassword) {
      throw createHttpError(404, "User with this data not found");
    }

    // 3. надсилаємо дані про користувача (без паролю)
    const preparedUser = user.toJSON();

    delete preparedUser.password;

    res.status(200).send({ data: preparedUser });
  } catch (error) {
    next(error);
  }
};

// оновлення сессії по якимось даним з фронта
module.exports.refreshSession = async (req, res, next) => {
  try {
    // якщо надіслали ПОСТ запит з айді то треба оновити сесію
    const {
      body: { userId },
    } = req;

    // 1. шукаємо користувача
    const user = await User.findByPk(userId);

    // 2. кидаємо помилко якщо такого не існує
    if (!user) {
      throw new createHttpError(404, "User not found");
    }

    // 3. надсилаємо дані про користувача (без паролю)
    const preparedUser = user.toJSON();

    delete preparedUser.password;

    res.status(200).send({ data: preparedUser });
  } catch (error) {
    next(error);
  }
};
