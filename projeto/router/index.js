const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');

const router = Router();
const pacienteController = new PacienteController();

router.post('/', pacienteController.create);
router.put('/:id', pacienteController.update);
router.get('/:id', pacienteController.index);

module.exports = router;