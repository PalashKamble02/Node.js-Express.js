const express = require('express');
const app = express();
const mongodb = require('mongodb')
const dbConnect = require('../mongodb/dbConnectionMethods');
const PORT = 3000;


app.use(express.json());


app.delete('/:id', async(req,res)=>{
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(PORT)