const mongoose = require('mongoose');
const ingredientShema = mongoose.Schema({
    title: {types: String, required: true}
});

module.exports =  mongoose.model('Ingredients', ingredientShema);