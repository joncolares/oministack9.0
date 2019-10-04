//importando o express
const express = require('express');
const multer = require('multer');
const uploadconfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const ReservaController = require('./controllers/ReservaController');


const routes = express.Router();
const upload = multer(uploadconfig);




//pegando a rota do sistema com get 1- paramentro é a rota, o segundo é uma função de requisão e resposta
//Metodos GET, POST, PUT, DELETE
//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body =  acessar o corpo da requisição (para criar e editar registro)
routes.post('/sessions', SessionController.store);
routes.get('/spot',SpotController.index);
routes.post('/spot', upload.single('imagem'),SpotController.store);

routes.get('/dashboard',DashboardController.show);
routes.post('/spot/:spot_id/reserva',ReservaController.store);

//exportando as routas para as outras aplicações
module.exports = routes;