function validateTalk(req, res, next) {
    const { talk } = req.body;
    if (!talk) {
        res.status(400).send({ message: 
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    return next();
}

function validateDate(req, res, next) {
    const { talk: { watchedAt } } = req.body;
    const formatDateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (!watchedAt) {
        res.status(400).send({ message: 
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (!formatDateRegex.test(watchedAt)) {
        res.status(400).send({ message: 
            'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    return next();
}

function validateRate(req, res, next) {
    const { talk: { rate } } = req.body;
    if (!rate) {
        res.status(400).send({ message: 
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (rate < 1 || rate > 5) {
        res.status(400).send({ message: 
            'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
}

module.exports = {
    validateTalk,
    validateDate,
    validateRate,
};