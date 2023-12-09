const AppError = require('../utils/AppError');
const { criarPaciente, atualizarPaciente } = require('../db/api');

class PacienteController {
  async create(req, res) {
    const { nome, dataNascimento } = req.body;

    if (!nome || !dataNascimento) {
      throw new AppError("Preencha todos os campos");
    }


    const result = await criarPaciente({ nome, dataNascimento });

    return res.status(201).json(result);
  }

  async update(req, res) {
    const { nome, dataNascimento } = req.body;
    const { id } = req.params;

    if (!nome || !dataNascimento) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await atualizarPaciente({ nome, dataNascimento, id});

    return res.status(201).json(result);
  }
}

module.exports = PacienteController;