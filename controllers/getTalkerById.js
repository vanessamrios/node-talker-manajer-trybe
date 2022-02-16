const fs = require('fs');

module.exports = (_req, res) => {
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
  };
