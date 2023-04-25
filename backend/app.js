const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Ingredients = require('./models/Ingredients');
const Food = require('./models/Food');


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.post('/api/food',(req, res)=>{
    delete req.body._id;
    const food = new Food({
        ...req.body
    });
    food.save()
        .then(()=>{res.status(201).json({message: 'nourriture enregistre!'})})
        .catch(error=>res.status(400).json({error}));
    
});
app.post('/api/ingredient',(req, res)=>{
    delete req.body._id
    const ingredient = new Ingredients({
        ...req.body
    });
    ingredient.save()
        .then(()=>{res.status(201).json({message: 'ingredient enregistre'})})
        .catch(error=>res.status(400).json({error}))

});
app.get('/api/foods',(req, res, next)=>{
  Food.find()
     .then(foods => res.status(200).json(foods))
     .catch(error=>res.status(400).json({error}));
})




mongoose.connect("mongodb+srv://Theopen4:Theopen456@clusterdbrecetes.73jespq.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));






module.exports = app;