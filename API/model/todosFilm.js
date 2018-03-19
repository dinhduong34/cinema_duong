var mongoose=require("mongoose");

mongoose.connect("mongodb://cinema:123@ds215709.mlab.com:15709/duong-cinema")

var Schema=mongoose.Schema;
var CreateFilm = new Schema({
    NameFilm: String,
    StyleFilm: String,
    Comment: String,
    Month: String,
    Year:String

});

var Film=mongoose.model("Film", CreateFilm);

module.exports=Film;