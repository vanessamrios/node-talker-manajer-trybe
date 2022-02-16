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

function handleGetAllTalkers(_req, res) {
  const talkersJason = fs.readFileSync('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersJason);

  if (!talkers.length) {
    res.status(200).send(talkers);
  }
  return res.status(200).send(talkers);
}

app.get('/talker', handleGetAllTalkers);

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

app.listen(PORT, () => {
  console.log('Online');
});
