const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');
const VacinaAplicadaController = require('../controllers/VacinaAplicadaController');
const VacinaController = require('../controllers/VacinaController');

const router = Router();
const pacienteController = new PacienteController();
const vacinaAplicadaController = new VacinaAplicadaController();
const vacinaController = new VacinaController();

router.post('/paciente', pacienteController.create);
router.put('/paciente/:id', pacienteController.update);
router.get('/paciente/:id', pacienteController.find);
router.delete('/paciente/:id', pacienteController.delete);
router.get('/paciente/', pacienteController.show);

router.post('/vacinaAplicada', vacinaAplicadaController.create);
router.delete('/vacinaAplicada/:idVacina/:idPaciente', vacinaAplicadaController.delete);
router.get('/vacinaAplicada', vacinaAplicadaController.show);

router.get('/vacinaAno', vacinaController.vacinaAno);
router.get('/vacinaMes', vacinaController.vacinaMes);
router.get('/vacinaAnoExato', vacinaController.vacinaAnoExato);
router.get('/vacinaMesExato', vacinaController.vacinaMesExato);
router.get('/vacinaIdade', vacinaController.vacinaIdade);

module.exports = router;