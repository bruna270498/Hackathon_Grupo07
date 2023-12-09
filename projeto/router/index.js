const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');
const VacinaAplicadaController = require('../controllers/VacinaAplicadaController');
const VacinaController = require('../controllers/VacinaController');

const router = Router();
const pacienteController = new PacienteController();
const vacinaAplicadaController = new VacinaAplicadaController();
const vacinaController = new VacinaController();

router.post('/', pacienteController.create);
router.put('/:id', pacienteController.update);
// router.get('/:id', pacienteController.find);
router.delete('/:id', pacienteController.delete);
router.get('/', pacienteController.show);

router.post('/vacinaAplicada', vacinaAplicadaController.create);
router.delete('/vacinaAplicada/:idVacina/:idPaciente', vacinaAplicadaController.delete);
router.get('/vacinaAplicada', vacinaAplicadaController.show);

router.get('/vacinaAno', vacinaController.vacinaAno);
router.get('/vacinaMes', vacinaController.vacinaMes);
router.get('/vacinaAnoExato', vacinaController.vacinaAnoExato);
router.get('/vacinaMesExato', vacinaController.vacinaMesExato);

module.exports = router;