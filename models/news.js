const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
 author:{
   type:String
 },
 title:{
   type:String
 },
description:{
  type:String
},
publishedAt:{
  type:Date
},
type:{
  type:String
},
content:{
  type:String
},



});


module.exports = News = mongoose.model('news',newsSchema);