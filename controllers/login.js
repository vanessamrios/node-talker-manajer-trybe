const generateToken = require('../utils/generateToken');

module.exports = (_req, res) => res.status(200).send({
    token: generateToken(),
    });
