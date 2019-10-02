//importando o mongoose
const mongoose = require('mongoose');
//montando esquema do objeto em questão
const UserSchema = new mongoose.Schema({
    email: String
});

//criando e exportando o model do usuário, params(1- o model, 2 - o schema)
module.exports = mongoose.model('User', UserSchema);
