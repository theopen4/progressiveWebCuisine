const express = require('express');
const router = express.Router();
const ingredientCtrl = require('../controllers/ingredient')


router.post('/',ingredientCtrl.createIngredient);

router.get('/',ingredientCtrl.getOneIngredient);

router.get('/:id',ingredientCtrl.getAllIngredients);

router.put('/:id',ingredientCtrl.modifyIngredient);

router.delete('/:id',ingredientCtrl.deleteIngredient);

module.exports = router;