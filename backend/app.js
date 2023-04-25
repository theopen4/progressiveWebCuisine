const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Ingredients = require('./models/Ingredients')
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.post('/api/foods',(req, res)=>{
    delete req.body._id;
    const ingredients = new Thing({
        ...req.body
    });
    thing.save()
        .then(()=>{res.status(201).json({message: 'nourriture enregistre!'})})
        .catch(error=>res.status(400).json({error}));
    

   
    
   
})


mongoose.connect("mongodb+srv://Theopen4:Theopen456@clusterdbrecetes.73jespq.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));






module.exports = app;