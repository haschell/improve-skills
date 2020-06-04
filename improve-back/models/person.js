//Sample Mongoose Schema (Person class)  
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    lastName: String
});

//Export the schema  
module.exports = mongoose.model('Person', personSchema);