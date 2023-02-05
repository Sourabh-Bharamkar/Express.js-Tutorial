
const express= require('express')
const app=express();

app.use((req,res,next)=>{
    console.log('In the Middleware')
    next();

})

app.use((req,res,next)=>{
    console.log('In the another Middleware')
    next();
})

app.get('/',(req,res)=>{
    
    res.send({key:'value'})
    
})

app.listen('3000');

