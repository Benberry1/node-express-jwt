const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const login = async (req, res) => {
  const { username, password } = req.body;
  // basic validation, other options would be having a mongoose schema and/or use third party such as Joi
  if (!username || !password) {
    throw new CustomAPIError("Please provide an email and password", 400);
  }
  //   no connected database for this basic demonstation of jwt so id is created and added in the api
  const id = mongoose.Types.ObjectId();
  // token created with small payload, secret in env file.
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).send({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  // req.user has been created in the auth middleware using id and username from authHeader
  const { username } = req.user;
  //   lucky number added into the response for something different
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).send({
    msg: `Hello, ${username}`,
    secret: `Here is your authorised data. Your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
