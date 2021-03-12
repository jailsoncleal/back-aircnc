const Spot = require('../models/Spot');

module.exports = {
    async store(req, res){
        const spot = await Spot.create(req.body)
    }
}