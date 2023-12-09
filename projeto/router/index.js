const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');

const router = Router();
const pacienteController = new PacienteController();

router.post('/', pacienteController.create);

module.exports = router;