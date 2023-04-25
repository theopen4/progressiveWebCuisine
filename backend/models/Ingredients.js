const mongoose = require('mongoose');
const ingredientShema = mongoose.Schema({
    title: {type: String, required: true}
});

module.exports =  mongoose.model('Ingredients', ingredientShema);