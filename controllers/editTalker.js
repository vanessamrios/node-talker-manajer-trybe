const { writeFileSync, readFileSync } = require('fs');

module.exports = (req, res) => {
    const { id } = req.params;
    const talkersJason = readFileSync('talker.json', 'utf-8');
    const talkers = JSON.parse(talkersJason);
    const { name, age, talk } = req.body;
    const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

    talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk };
    writeFileSync('talker.json', JSON.stringify(talkers));
    res.status(200).send(talkers[talkerIndex]);
};
