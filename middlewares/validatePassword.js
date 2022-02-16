function isPasswordValid(password) {
    const minPasswordSize = 6;
    return password.length >= minPasswordSize;
  }

module.exports = (req, res, next) => {
    const { password } = req.body;
  if (!password) {
    return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  }
  if (!isPasswordValid(password)) {
    return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return next();
};
