const createHttpError = require("http-errors");
const { RefreshToken, User } = require("../db/models");
const { prepareUser } = require("../utils/user");
const JwtService = require("./token.service");
const { update } = require("lodash");

module.exports.createSession = async (user) => {
  // 1. генеруємо токени для нової сессії
  const accessToken = await JwtService.createAccessToken({
    id: user.id,
  });

  const refreshToken = await JwtService.createRefreshToken({
    id: user.id,
  });

  // 2. зберігаємо його у БД
  await RefreshToken.create({ token: refreshToken, userId: user.id });

  // 3. підготовуємо дані користувача до відпраки на фронт (прибираємо пароль)
  const preparedUser = prepareUser(user);

  // 4. повертаємо дані сессії як результат
  return { user: preparedUser, tokenPair: { accessToken, refreshToken } };
};

module.exports.refreshSession = async (tokenInstance) => {
  // 1. по даним з екземпляра токена знайти юзера
  const user = await tokenInstance.getUser();

  // 2. якщо немає кидаємо помилку
  if (!user) {
    throw createHttpError(404, "User with this data not found");
  }

  // 3. створити новий токени для юзера
  const accessToken = await JwtService.createAccessToken({
    id: user.id,
  });

  const refreshToken = await JwtService.createRefreshToken({
    id: user.id,
  });

  // 4. замінити старий токен новим у БД
  await tokenInstance.update({ token: refreshToken });

  // 5. підготовуємо дані користувача до відпраки на фронт (прибираємо пароль)
  const preparedUser = prepareUser(user);

  // 6. повертаємо дані сессії як результат
  return { user: preparedUser, tokenPair: { accessToken, refreshToken } };
};
