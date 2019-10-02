const User = require('../models/User');
const Spot = require('../models/Spot');
module.exports = {
    async index(req, res){
        const {tecnologias} = req.query;
        const spots = await Spot.find({ tecnologias: tecnologias});
        return res.json(spots);
    },

    async store(req, res){
        const {filename} = req.file;
        const {empresa, tecnologias, valor} = req.body;
        const {user_id} = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: "usuario nao presta"
            })

        }

        const spot = await Spot.create({
            user: user_id,
            imagem: filename,
            empresa,
            tecnologias: tecnologias.split(',').map(tecnologias => tecnologias.trim()),
            valor
        });
        return res.json(spot);
    }
}