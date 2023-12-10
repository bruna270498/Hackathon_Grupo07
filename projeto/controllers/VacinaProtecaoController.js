const AppError = require('../utils/AppError');
const { mostrarVacinaProtecao } = require('../db/vacinaProtecao');

class VacinaProtecaoController {
  async find(req, res) {
    const { text } = req.query;

    if (!text) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await mostrarVacinaProtecao(text);

    return res.status(200).json(result);
  }
}

module.exports = VacinaProtecaoController;