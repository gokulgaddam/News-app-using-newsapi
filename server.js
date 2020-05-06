const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const axios=require('axios');
const cors = require('cors')

const news=require('./models/news');
const app = express();
app.use(bodyParser.json());
app.use(cors())
const uri="mongodb://localhost:27017/news"

/*  mongoose.connect(uri)
  .then(console.log('successfully connected to database'))
  .catch(err => console.log(err));
*/
  app.get('/news',(req,res)=>{
        /* news.find({}).
         then(news=>res.json(news));

  */
 console.log('arrived');
axios({
  "method":"GET",
  "url":"https://newsapi.org/v2/top-headlines?country=in&apiKey=b37371e1232447c1a6b51720f498b85f"
 
  
  })
  .then((response)=>{
    res.json(response.data);
  })
  .catch((error)=>{
    console.log(error)
  })

})


app.get('/sports',(req,res)=>{
  /* news.find({}).
   then(news=>res.json(news));

*/
console.log('arrived');
axios({
"method":"GET",
"url":"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b37371e1232447c1a6b51720f498b85f"


})
.then((response)=>{
res.json(response.data);
})
.catch((error)=>{
console.log(error)
})

})


app.get('/business',(req,res)=>{
  /* news.find({}).
   then(news=>res.json(news));

*/
console.log('arrived in business');
axios({
"method":"GET",
"url":"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b37371e1232447c1a6b51720f498b85f"


})
.then((response)=>{
res.json(response.data);
})
.catch((error)=>{
console.log(error)
})

})


app.get('/health',(req,res)=>{
  /* news.find({}).
   then(news=>res.json(news));

*/
console.log('arrived');
axios({
"method":"GET",
"url":"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b37371e1232447c1a6b51720f498b85f"


})
.then((response)=>{
res.json(response.data);
})
.catch((error)=>{
console.log(error)
})

})


app.get('/entertainment',(req,res)=>{
  /* news.find({}).
   then(news=>res.json(news));

*/
console.log('arrived');
axios({
"method":"GET",
"url":"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b37371e1232447c1a6b51720f498b85f"


})
.then((response)=>{
res.json(response.data);
})
.catch((error)=>{
console.log(error)
})

})





const port = 5000;

app.listen(port, () => `Server running on port ${port}`);