const express = require('express');
const app = express();
const PORT = 3000;

app.use("/welcome",function(req,res,next){
    req.user = 'Guest';
    next();
})

app.get("/welcome",function(req,res){
    res.send(`<h1>Welcome ${req.user}</h1>`)
})

app.listen(PORT,()=>{
   console.log(`Server on http://localhost:${PORT}`);
})