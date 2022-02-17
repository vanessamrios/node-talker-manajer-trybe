const { writeFileSync, readFileSync } = require('fs');

module.exports = (req, res) => {
    const talkersJason = readFileSync('talker.json', 'utf-8');
    const talkers = JSON.parse(talkersJason);
    const id = talkers.length + 1;
    const { name, age, talk } = req.body;
    const newTalker = {
        id,
        name,
        age,
        talk,
    };
    talkers.push(newTalker);
    writeFileSync('talker.json', JSON.stringify(talkers));
    return res.status(201).send(newTalker);
};
