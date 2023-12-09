const AppError = require('../utils/AppError');
const { consultaVacinaAno } = require('../db/consultaVacina');

class VacinaController {

    async vacinaAno(_req, res) {
        const result = await consultaVacinaAno();
        return res.status(200).json(result);
    };
};
module.exports = VacinaController;