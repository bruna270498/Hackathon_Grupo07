const { vacinaPaciente } = require('../db/vacinaAplicada');

class VacinaPacienteController {
  async vacinasTomadas(req, res) {
    const { id } = req.params;

    const result = await vacinaPaciente(id);

    return res.status(200).json(result);
  }
  async vacinasPendentes(req, res) {
    const { id } = req.params;
  }
}

module.exports = VacinaPacienteController;