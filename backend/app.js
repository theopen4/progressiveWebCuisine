const express = require('express');
const app = express();
const mongoose = require('mongoose');
const foodRoute = require('./routes/foods')
const ingeredientRoute = require('./routes/ingredients')
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
mongoose.connect("mongodb+srv://Theopen4:Theopen456@clusterdbrecetes.73jespq.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use('/api/food', foodRoute);
  app.use('/api/ingredient', ingeredientRoute );






module.exports = app;