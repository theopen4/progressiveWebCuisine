const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const foodCtrl = require('../controllers/food');

router.post('/',auth, foodCtrl.createFood)

router.get('/',auth, foodCtrl.getOneFood)


router.get('/:id',auth, foodCtrl.getAllFood)


router.put('/:id',auth, foodCtrl.modifyFood);

router.delete('/:id', auth, foodCtrl.deleteFood);

module.exports = router;