const AppError = require('../utils/AppError');
const { consultaVacinaAno, consultaVacinaMes, consultaVacinaAnoExato, consultaVacinaMesExato, consultaVacinaIdade, consultaVacinaIdadeMes } = require('../db/consultaVacina');

class VacinaController {
    async vacinaAno(_req, res) {
        const result = await consultaVacinaAno();

        return res.status(200).json(result);
    }
    async vacinaAnoExato(req, res) {
        const { ano } = req.query;

        if (!ano) {
            throw new AppError("Preencha todos os campos");
        }

        const result = await consultaVacinaAnoExato(ano);

        return res.status(200).json(result);
    }
    async vacinaMes(_req, res) {
        const result = await consultaVacinaMes();

        return res.status(200).json(result);
    }
    async vacinaMesExato(req, res) {
        const { mes } = req.query;

        if (!mes) {
            throw new AppError("Preencha todos os campos");
        }

        const result = await consultaVacinaMesExato(mes);

        return res.status(200).json(result);
    }
    async vacinaIdade(req, res) {
        const { idade } = req.query;

        if (!idade) {
            throw new AppError("Preencha todos os campos");
        }

        const result = await consultaVacinaIdade(idade);

        return res.status(200).json(result);
    }
    async vacinaIdadeMes(req, res) {
        const { mes } = req.query;

        if (!mes) {
            throw new AppError("Preencha todos os campos");
        }

        const result = await consultaVacinaIdadeMes(mes);

        return res.status(200).json(result);
    }
};
module.exports = VacinaController;