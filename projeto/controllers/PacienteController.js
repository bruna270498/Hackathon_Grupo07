const AppError = require('../utils/AppError');
const { criarPaciente, atualizarPaciente, mostrarPacientes, deletarPaciente, todosPacientes } = require('../db/pacient');

class PacienteController {
  async create(req, res) {
    const { nome, data_nascimento } = req.body;

    if (!nome || !data_nascimento) {
      throw new AppError("Preencha todos os campos");
    }

    const result = await criarPaciente(nome, data_nascimento);

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
  async delete(req, res) {
    const { id } = req.params;

    const result = await deletarPaciente(id);

    return res.status(200).json(result);
  }
  async show(_req, res) {
    const result = await todosPacientes();

    return res.status(200).json(result);
  }
}

module.exports = PacienteController;