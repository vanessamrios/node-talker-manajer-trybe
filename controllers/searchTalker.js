const { readFileSync } = require('fs');

module.exports = (req, res) => {
    const { q } = req.query;
    const talkersJason = readFileSync('talker.json', 'utf-8');
    const talkers = JSON.parse(talkersJason);
    const filteredTalkers = talkers.filter((t) => t.name.includes(q));

    res.status(200).send(filteredTalkers);
};