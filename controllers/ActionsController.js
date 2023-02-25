const actions  = require('../models').Actions;


exports.getActions = async (req, res, next) => {
    try {
   
        const myActions = await actions.findAndCountAll();
        res.json( myActions);
    
} catch (error) {
    const err = res.status(404).json(error);
			return next(err);
}

    
    

}

exports.getActionbyid = async (req, res, next) => {
    const { id } = req.params;
    try {
   
        const myActions = await actions.findByPk(id);
        res.json({ data: myActions, page: req.params });
    
    } catch (error) {
        const err = res.status(404).json(error);
        return next(err);
    }
}