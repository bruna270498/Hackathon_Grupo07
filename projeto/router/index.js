const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');
const VacinaAplicadaController = require('../controllers/VacinaAplicadaController');
const VacinaController = require('../controllers/VacinaController');

const router = Router();
const pacienteController = new PacienteController();
const vacinaAplicadaController = new VacinaAplicadaController();
const vacinaAno = new VacinaController();

router.post('/', pacienteController.create);
router.put('/:id', pacienteController.update);
// router.get('/:id', pacienteController.index);
router.delete('/:id', pacienteController.delete);
router.get('/', pacienteController.show);

router.post('/vacinaAplicada', vacinaAplicadaController.create);
router.delete('/vacinaAplicada/:idVacina/:idPaciente', vacinaAplicadaController.delete);
router.get('/vacinaAplicada', vacinaAplicadaController.show);

router.get('/vacinaAno', vacinaAno.vacinaAno);

module.exports = router;