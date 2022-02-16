function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

module.exports = (req, res, next) => {
    const { email } = req.body;
  if (!email) {
    return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  }
  if (!isEmailValid(email)) {
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  return next();
};