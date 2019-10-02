//importando o mongoose
const mongoose = require('mongoose');
//montando esquema do objeto em questão
const ReservaSchema = new mongoose.Schema({
    data: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

//criando e exportando o model do usuário, params(1- o model, 2 - o schema)
module.exports = mongoose.model('Reserva', ReservaSchema);
