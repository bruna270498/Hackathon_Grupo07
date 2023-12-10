const AppError = require('../utils/AppError');
const { adicionarCampanha, atualizarCampanha, pesquisaCampanhaData, adicionarVacinaCampanha, deletarVacinaCampanha, mostrarCampanhaVacina } = require('../db/campanhaVacinacao');

class CampanhaVacinacaoController {
  async create(req, res) {
    const { descricao, dataInicio, dataFim } = req.body;

    if (!descricao || !dataInicio || !dataFim) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await adicionarCampanha(descricao, dataInicio, dataFim);

    return res.status(201).json(result);
  }
  async update(req, res) {
    const { id } = req.params;
    const { descricao, dataInicio, dataFim } = req.body;

    if (!descricao || !dataInicio || !dataFim) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await atualizarCampanha(descricao, dataInicio, dataFim, id);

    return res.status(200).json(result);
  }
  async search(req, res) {
    const { data } = req.query;

    const result = await pesquisaCampanhaData(data);

    return res.status(200).json(result);
  }
  async addVaccine(req, res) {
    const { idCampanha, idVacina } = req.body;

    if (!idCampanha || !idVacina) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await adicionarVacinaCampanha(idCampanha, idVacina);

    return res.status(201).json(result);
  }
  async deleteVaccine(req, res) {
    const { idVacina } = req.params;

    const result = await deletarVacinaCampanha(idVacina);

    return res.status(200).json(result);
  }
  async showCampanha(req, res) {
    const { text } = req.query;

    const result = await mostrarCampanhaVacina(text);
    console.log(result)
    return res.status(200).json(result);
  }
}

module.exports = CampanhaVacinacaoController;