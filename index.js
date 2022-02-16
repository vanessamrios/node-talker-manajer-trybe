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

function handleGetTalker(_req, res) {
  const talkersJason = fs.readFileSync('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersJason);

  if (!talkers.length) {
    res.status(200).send(talkers);
  }
  return res.status(200).send(talkers);
}

app.get('/talker', handleGetTalker);

app.listen(PORT, () => {
  console.log('Online');
});
