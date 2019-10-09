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
}, {
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('imagem_url').get(function(){
    return `http://localhost:3333/files/${this.imagem}`
});

//criando e exportando o model do usuário, params(1- o model, 2 - o schema)
module.exports = mongoose.model('Spot', SpotSchema);
