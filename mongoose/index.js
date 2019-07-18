var mongoose = require("mongoose");
mongoose.connect('mongodb://test:123456@localhost:27017/todo',
{useNewUrlParser:true});
/*
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
	console.log("connected");
});
*/

var kittySchema = new mongoose.Schema({
	name:String
    });


kittySchema.methods.speak = function(){
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  
}

var Kitten = mongoose.model('Kitten',kittySchema);

var fluffy = new Kitten({name:'a small fluffy'});


fluffy.save(function(err,fluffy){
	if(err) return console.error(err);
	fluffy.speak();
});

Kitten.find({name:/^small/},function(err,fluffy){
    if(err) return console.error(err);
    console.log(fluffy);
});

Kitten.find({name:/^fluffy/},function(err,fluffy){
    if(err) return console.error(err);
    console.log(fluffy);
});

Kitten.deleteOne({name:"fluffy"},function(err){
	if(err) return console.error(err);
	console.log("deleted");
});