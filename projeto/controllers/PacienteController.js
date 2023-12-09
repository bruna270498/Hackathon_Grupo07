const AppError = require('../utils/AppError');
const { criarPaciente, atualizarPaciente, mostrarPacientes } = require('../db/api');

class PacienteController {
  async create(req, res) {
    const { id_paciente, nome, data_nascimento } = req.body;

    if (!id_paciente || !nome || !data_nascimento) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await criarPaciente(id_paciente, nome, data_nascimento);

    return res.status(201).json(result);
  }

  async update(req, res) {
    const { nome, dataNascimento } = req.body;
    const { id } = req.params;

    if (!nome || !dataNascimento) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await atualizarPaciente({ nome, dataNascimento, id });

    return res.status(200).json(result);
  }
  async index(req, res) {
    const { id } = req.params;

    const result = await mostrarPacientes(id);

    return res.status(200).json(result);
  }
}

module.exports = PacienteController;