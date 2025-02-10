const yup = require("yup");

const USER_REGISTRATION_SCHEMA = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  imgSrc: yup.string(),
  isMale: yup.boolean().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^.{8,32}$/, "enter valid password")
    .required(),
});

const USER_UPDATE_SCHEMA = yup
  .object({
    firstName: yup.string(),
    lastName: yup.string(),
    imgSrc: yup.string(),
    isMale: yup.boolean(),
    email: yup.string().email(),
    password: yup.string().matches(/^.{8,32}$/, "enter valid password"),
  })
  .exact();

module.exports.validateUserRegistration = async (req, res, next) => {
  try {
    const user = await USER_REGISTRATION_SCHEMA.validate(req.body);

    req.user = user;
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.validateUserUpdate = async (req, res, next) => {
  try {
    const { body } = req;

    req.user = await USER_UPDATE_SCHEMA.validate(body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
