const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');
const VacinaAplicadaController = require('../controllers/VacinaAplicadaController');
const VacinaController = require('../controllers/VacinaController');
const VacinaProtecaoController = require('../controllers/VacinaProtecaoController');
const VacinaPacienteController = require('../controllers/VacinaPacienteController');
const CampanhaVacinacaoController = require('../controllers/CampanhaVacinacaoController');

const router = Router();
const pacienteController = new PacienteController();
const vacinaAplicadaController = new VacinaAplicadaController();
const vacinaController = new VacinaController();
const vacinaProtecaoController = new VacinaProtecaoController();
const vacinaPacienteController = new VacinaPacienteController();
const campanhaVacinacaoController = new CampanhaVacinacaoController();

router.post('/paciente', pacienteController.create
  /*  #swagger.parameters['requestBody'] = {      
      in: 'body',
      type: 'object',
      description: 'Cria um novo paciente',
      required: true,
      '@schema': {
        properties: {
          nome: {
            type: "string",          
          },
          data_nascimento: {
            type: "string"
          },
        },
        required: ["nome", "data_nascimento"]
      },
  } */
);

router.put('/paciente/:id', pacienteController.update
  /* #swagger.parameters['id'] = {
          in: 'path',
          description: 'ID do paciente',
          required: true,
          type: 'integer',
        },
   #swagger.parameters['requestBody'] = {
    in: 'body',
    description: 'Novos dados para o paciente',
    required: true,
    '@schema': {
      properties: {
        nome: {
          type: 'string',
        },
        data_nascimento: {
          type: 'string',
        },
      },
      required: ['nome', 'data_nascimento'],
    },
  } */
);
router.get('/paciente', pacienteController.find
  /*  #swagger.parameters['queryName'] = {      
     in: 'query',
     type: 'string',
     description: 'Obtém um determinado paciente',
     required: true,
 } */
);
router.delete('/paciente/:id', pacienteController.delete
  /* #swagger.parameters['id'] = {
            in: 'path',
            description: 'Deleta um paciente',
            required: true,
            type: 'integer',
          } */
);
router.get('/paciente/', pacienteController.show
  /*  #swagger.parameters['none'] = {      
     description: 'Obtém a lista de todos pacientes',
 } */
);

router.post('/vacinaAplicada', vacinaAplicadaController.create
  /*  #swagger.parameters['requestBody'] = {      
       in: 'body',
       type: 'object',
       description: 'Adiciona uma vacina que foi aplicada',
       required: true,
       '@schema': {
         properties: {
           idPaciente: {
             type: "string",          
           },
           idVacina: {
             type: "string"
           },
           dataAplicacao: {
             type: "string"
           }
         },
         required: ["idPaciente", "idVacina", "dataAplicacao"]
       },
   } */
);
router.delete('/vacinaAplicada/:idVacina/:idPaciente', vacinaAplicadaController.delete
  /* #swagger.parameters['idVacina'] = {
           in: 'path',
           description: 'Deleta uma vacina',
           required: true,
           type: 'integer',
         } */
  /* #swagger.parameters['idPaciente'] = {
         in: 'path',
         description: 'Deleta uma vacina',
         required: true,
         type: 'integer',
       } */
);
router.get('/vacinaAplicada', vacinaAplicadaController.show
  /*  #swagger.parameters['none'] = {      
     description: 'Obtém a lista de todas vacinas aplicadas',
 } */
);

router.get('/vacinaAno', vacinaController.vacinaAno
  /*  #swagger.parameters['none'] = {      
     description: 'Obtém a lista de todas vacinas aplicadas por ano',
 } */
);
router.get('/vacinaMes', vacinaController.vacinaMes
  /*  #swagger.parameters['none'] = {      
     description: 'Obtém a lista de todas vacinas aplicadas por mês',
 } */
);
router.get('/vacinaAnoExato', vacinaController.vacinaAnoExato
  /*  #swagger.parameters['queryYear'] = {
      in: 'query',
     type: 'string',  
     description: 'Obtém a lista de todas vacinas aplicadas em um determinado ano',
     required: true,
 } */
);
router.get('/vacinaMesExato', vacinaController.vacinaMesExato
  /*  #swagger.parameters['queryMonth'] = {
      in: 'query',
     type: 'string',  
     description: 'Obtém a lista de todas vacinas aplicadas em um determinado mês',
     required: true,
 } */
);
router.get('/vacinaIdade', vacinaController.vacinaIdade
  /*  #swagger.parameters['queryYear'] = {
      in: 'query',
     type: 'string',  
     description: 'Obtém a lista de todas vacinas que uma pessoa tem que tomar de acordo com a sua idade',
     required: true,
 } */
);
router.get('/vacinaIdadeMes', vacinaController.vacinaIdadeMes
  /*  #swagger.parameters['queryMonth'] = {
      in: 'query',
     type: 'string',  
     description: 'Obtém a lista de todas vacinas que uma pessoa tem que tomar de acordo com a sua idade em meses',
     required: true,
 } */
);

router.get('/vacinaProtecao', vacinaProtecaoController.find
  /*  #swagger.parameters['queryText'] = {
       in: 'query',
      type: 'string',  
      description: 'Obtém a lista de todas vacinas de acordo com sua proteção',
      required: true,
  } */
);

router.get('/vacinaPaciente/:id', vacinaPacienteController.vacinasTomadas
  /* #swagger.parameters['idPaciente'] = {
          in: 'path',
          description: 'Mostra as vacinas que um determinado paciente tomou',
          required: true,
          type: 'integer',
        } */
);
router.get('/vacinaPendentes/:id', vacinaPacienteController.vacinasPendentes
  /* #swagger.parameters['idPaciente'] = {
          in: 'path',
          description: 'Mostra as vacinas pendentes de um determinado paciente',
          required: true,
          type: 'integer',
        } */
);

router.post('/campanhaVacinacao', campanhaVacinacaoController.create
  /*  #swagger.parameters['requestBody'] = {      
         in: 'body',
         type: 'object',
         description: 'Cria uma campanha de vacinação',
         required: true,
         '@schema': {
           properties: {
             descricao: {
               type: "string",          
             },
             dataInicio: {
               type: "string"
             },
             dataFim: {
               type: "string"
             }
           },
           required: ['descricao', 'dataInicio', 'dataFim'],
         },
     } */
);
router.put('/campanhaVacinacao/:id', campanhaVacinacaoController.update
  /* #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID da campanha',
           required: true,
           type: 'integer',
         },
    #swagger.parameters['requestBody'] = {      
         in: 'body',
         type: 'object',
         description: 'Atualiza os dados de uma campanha de vacinação',
         required: true,
         '@schema': {
           properties: {
             descricao: {
               type: "string",          
             },
             dataInicio: {
               type: "string"
             },
             dataFim: {
               type: "string"
             }
           },
           required: ['descricao', 'dataInicio', 'dataFim'],
         },
   } */
);
router.get('/campanhaVacinacao', campanhaVacinacaoController.search
  /*  #swagger.parameters['queryDate'] = {
        in: 'query',
       type: 'string',  
       description: 'Busca campanha pela data',
       required: true,
   } */
);
router.post('/campanhaVacinacao/adicionarVacina', campanhaVacinacaoController.addVaccine
  /*  #swagger.parameters['requestBody'] = {      
          in: 'body',
          type: 'object',
          description: 'Cadastrar campanha e vacinação',
          required: true,
          '@schema': {
            properties: {
              idCampanha: {
                type: "integer",          
              },
              idVacina: {
                type: "integer"
              },
            },
            required: ['idCampanha', 'idVacina'],
          },
      } */
);
router.delete('/campanhaVacinacao/deletarVacina/:idVacina', campanhaVacinacaoController.deleteVaccine
  /* #swagger.parameters['idVacina'] = {
            in: 'path',
            description: 'Deleta uma vacina e campanha da campanha de vacinação',
            required: true,
            type: 'integer',
          } */
);
router.get('/campanhaVacinacaoProtecao', campanhaVacinacaoController.showCampanha
  /*  #swagger.parameters['queryText'] = {
       in: 'query',
      type: 'string',  
      description: 'Obtém a campanha de acordo com a proteção da vacina',
      required: true,
  } */
);

module.exports = router;