const createHttpError = require("http-errors");
const { User, RefreshToken } = require("../db/models");
const { promisify } = require("node:util");
const { sign, verify } = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JwtSign = promisify(sign);
const jwtVerify = promisify(verify);

module.exports.registration = async (req, res, next) => {
  try {
    const { body, file } = req;

    const user = await User.create({
      ...body,
      imgSrc: file ? file.filename : null,
    });

    // генеруємо JWT для можливого рефрешу або для маршрутів що потребують авторизації
    const token = await JwtSign(
      {
        id: user.id,
      },
      "nvjfeqo4by3fkqbfhjkb4hgjkb34hkbghe8dj",
      {
        expiresIn: "7d",
      }
    );

    await RefreshToken.create({ userId: user.id, token });

    const preparedUser = user.toJSON();

    delete preparedUser.password;

    res.status(201).send({ data: { preparedUser, token } });
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

    const token = await JwtSign(
      {
        id: user.id,
      },
      "nvjfeqo4by3fkqbfhjkb4hgjkb34hkbghe8dj",
      {
        expiresIn: "7d",
      }
    );

    await RefreshToken.create({ userId: user.id, token });

    res.status(201).send({ data: { user: preparedUser, token } });
  } catch (error) {
    next(error);
  }
};

// оновлення сессії по якимось даним з фронта
module.exports.refreshSession = async (req, res, next) => {
  try {
    // якщо надіслали ПОСТ запит з токеном то треба оновити сесію
    const {
      body: { refreshToken },
    } = req;

    // 1. перевірити валідність токена
    const { id } = await jwtVerify(
      refreshToken,
      "nvjfeqo4by3fkqbfhjkb4hgjkb34hkbghe8dj"
    );

    // 2. Перевірити наявність токену у БД
    const foundToken = await RefreshToken.findOne({
      where: { token: refreshToken, userId: id },
    });

    if (!foundToken) {
      throw new createHttpError(404, "Token not found");
    }

    // 3. шукаємо користувача
    const user = await User.findByPk(id);

    // 4. кидаємо помилко якщо такого не існує
    if (!user) {
      throw new createHttpError(404, "User not found");
    }

    // 5. амулюємо старий токен перезаписуючи його у БД новим
    const token = await JwtSign(
      {
        id: user.id,
      },
      "nvjfeqo4by3fkqbfhjkb4hgjkb34hkbghe8dj",
      {
        expiresIn: "7d",
      }
    );

    await foundToken.update({ token });

    // 3. надсилаємо дані про користувача (без паролю)
    const preparedUser = user.toJSON();

    delete preparedUser.password;

    res.status(200).send({ data: { user: preparedUser, token } });
  } catch (error) {
    next(error);
  }
};
