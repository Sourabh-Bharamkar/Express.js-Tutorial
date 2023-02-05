
const express= require('express')
const app=express();

const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))


app.use('/add-products',(req,res,next)=>{
    res.send('<form action="/products" method="POST"><input type="text" name="title" placeholder="product name"><br> <input type="text" name="size" placeholder="product size"><br><br><button type="submit">Add product</button></form>')
})

app.post('/products',(req, res)=>{
    console.log(req.body);
    res.redirect('/')

})

app.use('/',(req,res)=>{
    
    res.send('<h1>Hello from Express!<h1>')
    
})

app.listen('3000');

