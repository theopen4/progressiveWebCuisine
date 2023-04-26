const Food = require('../models/Food');
exports.createFood = (req, res)=>{
    delete req.body._id;
    const food = new Food({
        ...req.body
    });
    food.save()
        .then(()=>{res.status(201).json({message: 'nourriture enregistre!'})})
        .catch(error=>res.status(400).json({error}));
    
};
exports.getOneFood = (req, res, next)=>{
    Food.findOne({_id: req.params.id})
      .then(food => res.status(200).json({food}))
      .catch(error => res.status(404).json({ error }));
}
exports.modifyFood = (req, res, next)=>{
    Food.updateOne({_id: req.params.id}, { ...req.body , _id: req.params.id, })
       .then(()=>{res.status(200).json({message: 'la nouriture a ete modifie'})})
       .catch(error=>res.status(400).json({error}))
  } 
exports.deleteFood = (req, res, next)=>{
    Food.deleteOne({id: req.params.id})
      .then(()=>{res.status(200).json({message:'nourriture supprime'})})
      .catch(error=>res.status(400).json({error}));
 };

exports.getAllFood = (req, res, next)=>{
    Food.find()
       .then(foods => res.status(200).json(foods))
       .catch(error=>res.status(400).json({error}));

};
