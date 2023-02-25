const router = require('express').Router();
const ActionsController = require('../controllers/ActionsController');

router.get('/get-all', ActionsController.getActions); // GET all customers
router.get('/getactionbyid/:id', ActionsController.getActionbyid); // GET all customers

module.exports = router;