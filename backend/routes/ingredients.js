const express = require('express');
const router = express.Router();
const ingredientCtrl = require('../controllers/ingredient')
const auth = require('../middleware/auth');


router.post('/',auth, ingredientCtrl.createIngredient);

router.get('/',auth, ingredientCtrl.getOneIngredient);

router.get('/:id',auth, ingredientCtrl.getAllIngredients);

router.put('/:id', auth, ingredientCtrl.modifyIngredient);

router.delete('/:id',auth, ingredientCtrl.deleteIngredient);

module.exports = router;