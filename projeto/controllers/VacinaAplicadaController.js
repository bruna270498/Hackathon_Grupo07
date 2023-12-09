const AppError = require('../utils/AppError');
const { cadastrarVacina, deletarVacina, mostrarAplicacoes } = require('../db/vacinaAplicada');

class VacinaAplicadaController {
  async create(req, res) {
    const { idPaciente, idVacina, dataAplicacao } = req.body;

    if (!idPaciente || !idVacina || !dataAplicacao) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await cadastrarVacina(idPaciente, idVacina, dataAplicacao);

    return res.status(201).json(result);
  }
  async delete(req, res) {
    const { idVacina, idPaciente } = req.params;

    const result = await deletarVacina(idVacina, idPaciente);

    return res.status(200).json(result);
  }
  async show(_req, res) {
    const result = await mostrarAplicacoes();

    return res.status(200).json(result);
  }
}

module.exports = VacinaAplicadaController;