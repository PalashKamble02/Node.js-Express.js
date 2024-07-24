const express = require('express');
const app = express();
const dbConnect = require('../mongodb/dbConnectionMethods');
const PORT = 3000;


app.use(express.json());


app.put('/:name', async (req,res)=>{
const data = await dbConnect();
const result = await data.updateOne(
    {name:req.params.name},
    {$set:req.body}
)
    res.send({result:"update"})
})

app.listen(PORT)