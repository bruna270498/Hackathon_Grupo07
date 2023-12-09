const AppError = require('../utils/AppError');
const { consultaVacinaAno, consultaVacinaMes, consultaVacinaAnoExato, consultaVacinaMesExato } = require('../db/consultaVacina');

class VacinaController {
    async vacinaAno(_req, res) {
        const result = await consultaVacinaAno();

        return res.status(200).json(result);
    }
    async vacinaAnoExato(req, res) {
        const { ano } = req.body;

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
        const { mes } = req.body;

        if (!mes) {
            throw new AppError("Preencha todos os campos");
        }

        const result = await consultaVacinaMesExato(mes);

        return res.status(200).json(result);
    }
};
module.exports = VacinaController;