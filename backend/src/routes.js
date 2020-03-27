const express = require('express');

const crypto = require('crypto');

const routes = express.Router();

const OngController= require('./controllers/OngController')
const IncidentController= require('./controllers/IncidentController')
const ProfileController= require('./controllers/ProfileController')
const SessionController= require('./controllers/SessionController')

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index); 

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 



/*
Métodos HTTP:
  GET: Buscar uma informação do back-end
  POST: Criar uma informação no back-end
  PUT: Alterar uma informação no back-end
  DELETE: Deletar uma informação no back-end
*/

/*
Tipos de Parâmetros:
  Query Params: Parâmetros nomeados enviados na rota após o símbolo "?" (filtros, paginação)
  Route Params: Parâmetros utilizados para idenficar recursos 
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

