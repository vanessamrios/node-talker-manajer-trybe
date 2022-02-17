const { writeFileSync, readFileSync } = require('fs');

module.exports = (req, res) => {
    const { id } = req.params;
    const talkersJason = readFileSync('talker.json', 'utf-8');
    const talkers = JSON.parse(talkersJason);
    const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

    talkers.splice(talkerIndex, 1);
    writeFileSync('talker.json', JSON.stringify(talkers));
    res.status(204).end();
};