const User = require('../models/User');
//index,show,store,destroy

module.exports = {
    async store(req, res){
        const {email} = req.body;
        if (await User.findOne({email})){
            return res.json({error: 'E-mail já cadastrado!'})
        } else{
            return res.json(await User.create({ email })) 
        }
    }
}

