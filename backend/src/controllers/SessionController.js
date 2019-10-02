const User = require('../models/User');

//Criado para administras as sessões do sistema
//metodos index, show, store, update, destroy 
module.exports = {
    async store(req, res) {
        const {email} = req.body;
        
        //para verificação se o usuario já foi criado, usando o let, significa que a variavel vai mudar
        let user = await User.findOne({email});
        //verificando se o usuário não existe, e criando o usuário no banco
        if(!user){
            user = await User.create({email});
        }

        return res.json(user);
    }
};