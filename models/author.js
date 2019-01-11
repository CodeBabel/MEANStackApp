var mongoose = require("mongoose");
var Promise = require("bluebird");

var authorSchema = mongoose.Schema({
name:{type:String},
role:{type:String}
});

var Author = mongoose.model('Author', authorSchema);


exports.seedAuthors = function() {
Author.find({}).exec(function(error, collection){
if(collection.length === 0) {
Author.create({name:'Ravindranath Barathy',role:'admin1'});
Author.create({name:'Kaviya Kulothungan',role:'admin2'});
}
})
}