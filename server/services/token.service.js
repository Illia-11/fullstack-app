const jwt = require("jsonwebtoken");
const { promisify } = require("node:util");

const jwtSign = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

const tokenConfig = {
  access: {
    secret: "nvjfeqo4by3fkqbfhjkb4hgjkb34hkbghe8dj",
    expiresIn: "30s",
  },
  refresh: {
    secret: "j35infjgn5jkgn53jn5jgku68onrnvjfdiosvn0divjfieowee7j",
    expiresIn: "14d",
  },
};

/**
 * функція генерації токена
 * @param {object} payload - дані які зберігаються всередині токена
 * @param {object} options - обʼжкт налаштувань токена
 * @param {string} options.secret - секрет токена
 * @param {string | number} options.expiresIn - час життя токена
 * @returns {Promise<string>}
 */
const createToken = (payload, { secret, expiresIn }) =>
  jwtSign(payload, secret, {
    expiresIn,
  });

/**
 * функція валідації токена
 * @param {string} token - JWT токен який перевіряється
 * @param {object} options - обʼжкт налаштувань токена
 * @param {string} options.secret - секрет токена
 * @returns {object} - обʼєкт payload токена
 */
const verifyToken = (token, { secret }) => jwtVerify(token, secret);

// Access token - токен доступу, використовується для авторизації власника, багаторазовий
module.exports.createAccessToken = (payload) =>
  createToken(payload, tokenConfig.access);
module.exports.verifyAccessToken = (token) =>
  verifyToken(token, tokenConfig.access);

// Refresh token - токен оновлення, використовується для оновлення токена доступу, одноразовий
module.exports.createRefreshToken = (payload) =>
  createToken(payload, tokenConfig.refresh);
module.exports.verifyRefreshToken = (token) =>
  verifyToken(token, tokenConfig.refresh);
