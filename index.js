const express = require('express');
const bodyParser = require('body-parser');
const getAllTalkers = require('./controllers/getAllTalkers');
const getTalkerById = require('./controllers/getTalkerById');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const login = require('./controllers/login');
const validateToken = require('./middlewares/validadeToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const { validateTalk, validateDate, validateRate } = require('./middlewares/validateTalk');
const createTalker = require('./controllers/createTalker');
const validadeToken = require('./middlewares/validadeToken');
const editTalker = require('./controllers/editTalker');
const deleteTalker = require('./controllers/deleteTalker');
const searchTalker = require('./controllers/searchTalker');

const talkerValidations = [validateName, validateAge, validateTalk, validateDate, validateRate];

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req 01

app.get('/talker', getAllTalkers);

// req 07

app.get('/talker/search', validadeToken, searchTalker);

// req 02

app.get('/talker/:id', getTalkerById);

// req 03

app.post('/login', validateEmail, validatePassword, login);

// req 04

app.post('/talker', validateToken, talkerValidations, createTalker);

// req 05

app.put('/talker/:id', validadeToken, talkerValidations, editTalker);

// req 06

app.delete('/talker/:id', validadeToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
