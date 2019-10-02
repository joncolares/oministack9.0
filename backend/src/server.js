//importando o express
const express = require('express');
const mongoose = require('mongoose');
//importando as rotas
const routes = require('./routes');

const app = express();

//conectando ao banco de dados, os dois ultimos parametros é para sumir as mensagem de conexão
mongoose.connect('mongodb+srv://joncolares:joncolares@cluster0-tphgh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//para a aplicação utilizar json
app.use(express.json());
//usando as rotas
app.use(routes);



app.listen(3333);

