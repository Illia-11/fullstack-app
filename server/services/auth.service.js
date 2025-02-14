const createHttpError = require("http-errors");
const { RefreshToken, User } = require("../db/models");
const { prepareUser } = require("../utils/user");
const JwtService = require("./token.service");
const { update } = require("lodash");

module.exports.createSession = async (user) => {
  // 1. генеруємо токен для нової сессії
  const token = await JwtService.createAccessToken({
    id: user.id,
  });

  // 2. зберігаємо його у БД
  await RefreshToken.create({ token, userId: user.id });

  // 3. підготовуємо дані користувача до відпраки на фронт (прибираємо пароль)
  const preparedUser = prepareUser(user);

  // 4. повертаємо дані сессії як результат
  return { user: preparedUser, token };
};

module.exports.refreshSession = async (tokenInstance) => {
  // 1. по даним з екземпляра токена знайти юзера
  const user = await tokenInstance.getUser();

  // 2. якщо немає кидаємо помилку
  if (!user) {
    throw createHttpError(404, "User with this data not found");
  }

  // 3. створити новий токен для юзера
  const token = await JwtService.createAccessToken({
    id: user.id,
  });

  // 4. замінити старий токен новим у БД
  await tokenInstance.update({ token });

  // 5. підготовуємо дані користувача до відпраки на фронт (прибираємо пароль)
  const preparedUser = prepareUser(user);

  // 6. повертаємо дані сессії як результат
  return { user: preparedUser, token };
};
