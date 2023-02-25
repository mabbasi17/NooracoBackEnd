const router = require('express').Router();
const SlidersController = require('../controllers/SliderController');

router.get('/list', SlidersController.getSliders); // GET all customers

module.exports = router;