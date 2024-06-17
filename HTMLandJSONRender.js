const  express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`<h1>Welcome . to Home page</h1><a href="/about">Got to About page</a>
         <a href="/help"> Go to help page<a/>`);
});

app.get('/about',(req,res)=>{
    
    res.send(`
        <input type="text" placeholder="User name" />
        <button>Click Me </button>
        <a href="/">Go to home page</a>
        <a href="/help">Go to help page</a>
        `);
});
app.get('/help',(req,res)=>{
    
    res.send([
        {
            name:"palash",
            email:"palsh@gmail"
        },
        {
            name:"palash",
            email:"rwadubolte@gmail"
        }
    ])
});

app.listen(5000);