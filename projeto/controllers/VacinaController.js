const AppError = require('../utils/AppError');
const { consultaVacinaAno, consultaVacinaMes } = require('../db/consultaVacina');

class VacinaController {

    async vacinaAno(_req, res) {
        const result = await consultaVacinaAno();
        return res.status(200).json(result);
    };

    async vacinaMes(_req, res) {
        const result = await consultaVacinaMes();
        return res.status(200).json(result);
    };

};
module.exports = VacinaController;