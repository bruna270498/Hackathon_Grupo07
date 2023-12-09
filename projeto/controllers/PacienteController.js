const AppError = require('../utils/AppError');
const { criarPaciente } = require('../db/api');
const uuid = require('uuid');
const uuidInt = require('uuid-int');

class PacienteController {
  async create(req, res) {
    const { nome, dataNascimento } = req.body;

    if (!nome || !dataNascimento) {
      throw new AppError("Preencha todos os campos");
    }


    const result = await criarPaciente({ nome, dataNascimento });

    return res.status(201).json(result);
  }
}

module.exports = PacienteController;