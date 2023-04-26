const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const foodCtrl = require('../controllers/food');

router.post('/',foodCtrl.createFood)

router.get('/',foodCtrl.getOneFood)


router.get('/:id',foodCtrl.getAllFood)


router.put('/:id',foodCtrl.modifyFood);

router.delete('/:id',foodCtrl.deleteFood);

 module.exports = router;