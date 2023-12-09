const AppError = require('../utils/AppError');

class CampanhaVacinacaoController {
  async create(req, res) {
    const { descricao, dataInicio, dataFim } = req.body;

    if (!descricao || !dataInicio || !dataFim) {
      throw new AppError("Preencha todos os campos");
    }
  }
}