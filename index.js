const express = require('express');
const app = express();
const PORT = 3000;

// app.use("/welcome",function(req,res,next){
//     req.user = 'Guest';
//     next();
// })

app.get("/welcome/:name",function(req,res){
    const {name} = req.params;
    const role = req.query.role;
    res.send(`<h1>Welcome ${name}, your role is ${role}</h1>`)
})

app.listen(PORT,()=>{
   console.log(`Server on http://localhost:${PORT}`);
})