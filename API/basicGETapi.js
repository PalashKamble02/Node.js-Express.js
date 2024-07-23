const express = require('express');
const app = express();
const dbConnect = require('../mongodb/dbConnectionMethods');
const PORT = 3000;


app.get('/', async (req,res)=>{
  let data = await dbConnect();
       data = await data.find().toArray();
       res.send(data);
})
app.listen(PORT)