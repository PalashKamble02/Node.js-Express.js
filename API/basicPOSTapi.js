const express = require('express');
const app = express();
const dbConnect = require('../mongodb/dbConnectionMethods');
const PORT = 3000;


app.use(express.json());


app.post('/', async (req, res)=>{
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
    res.send(result);
})

app.listen(PORT)