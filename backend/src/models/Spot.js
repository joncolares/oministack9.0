//importando o mongoose
const mongoose = require('mongoose');
//montando esquema do objeto em questão
const SpotSchema = new mongoose.Schema({
    imagem: String,
    empresa: String,
    valor: Number,
    tecnologias: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

//criando e exportando o model do usuário, params(1- o model, 2 - o schema)
module.exports = mongoose.model('Spot', SpotSchema);
