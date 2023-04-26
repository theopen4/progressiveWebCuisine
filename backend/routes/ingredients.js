const express = require('express');
const router = express.Router();
const Ingredients = require('../models/Ingredients');


router.post('/',(req, res)=>{
    delete req.body._id
    const ingredient = new Ingredients({
        ...req.body
    });
    ingredient.save()
        .then(()=>{res.status(201).json({message: 'ingredient enregistre'})})
        .catch(error=>res.status(400).json({error}))

});

router.get('/',(req, res, next)=>{
    Ingredients.find()
       .then(ingredient => res.status(200).json(ingredient))
       .catch(error=>res.status(400).json({error}));
  })

router.get('/:id',(req, res, next)=>{
    Ingredients.findOne({_id: req.params.id})
      .then(ingredients => res.status(200).json(ingredients))
      .catch(error => res.status(404).json({ error }));
  })

  router.put('/:id',(req, res, next)=>{
    Ingredients.updateOne({_id: req.params.id}, { ...req.body , _id: req.params.id, })
       .then(()=>{res.status(200).json({message: 'ingredients modifie'})})
       .catch(error=>res.status(400).json({error}));
  });

  router.delete('/:id',(req, res, next)=>{
    Ingredients.deleteOne({id: req.params.id})
      .then(()=>{res.status(200).json({message:'ingrdients supprime'})})
      .catch(error=>res.status(400).json({error}));
 });
 module.exports = router;