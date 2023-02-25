


// const sliders = require('../models/sliders');
const mysliders  = require('../models').silders;


exports.getSliders = async (req, res, next) => {
    try {
        const somesliders = await mysliders.findAll();
        res.json(somesliders);
    
} catch (error) {
    const err = res.status(404).json(error);
			return next(err);
}
}