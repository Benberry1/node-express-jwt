const login = async (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).send({
    msg: "Hello, John Doe",
    secret: `Here is your authorised data. Your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
