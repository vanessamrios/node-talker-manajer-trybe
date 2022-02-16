const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req 01

function handleGetAllTalkers(_req, res) {
  const talkersJason = fs.readFileSync('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersJason);

  if (!talkers.length) {
    res.status(200).send(talkers);
  }
  return res.status(200).send(talkers);
}

app.get('/talker', handleGetAllTalkers);

// req 02

function handleGetTalkerById(_req, res) {
  const talkersJason = fs.readFileSync('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersJason);
  const { id } = _req.params;
  const talker = talkers.find((t) => t.id === Number(id));

  if (!talker) {
    return res.status(404).send({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  return res.status(200).send(talker);
}

app.get('/talker/:id', handleGetTalkerById);

// req 3

function isEmailValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function isPasswordValid(password) {
  const minPasswordSize = 6;
  return password.length >= minPasswordSize;
}

function handleLogin(_req, res) {
  const { email, password } = _req.body;
  if (!email) {
    return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  }
  if (!isEmailValid(email)) {
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  }
  if (!isPasswordValid(password)) {
    return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return res.status(200).send({
    token: 'kdie7h6uo274kf8h',
  });
}

app.post('/login', handleLogin);

app.listen(PORT, () => {
  console.log('Online');
});
