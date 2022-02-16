const fs = require('fs');

module.exports = (_req, res) => {
    const talkersJason = fs.readFileSync('talker.json', 'utf-8');
    const talkers = JSON.parse(talkersJason);
  
    if (!talkers.length) {
      res.status(200).send(talkers);
    }
    return res.status(200).send(talkers);
  };
