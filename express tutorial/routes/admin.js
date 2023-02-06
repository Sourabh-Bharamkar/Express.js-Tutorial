const express=require('express')
const app=express()

const router=express.Router();

router.get('/add-products',(req,res)=>{
    res.send('<form action="/admin/products" method="POST"><input type="text" name="title" placeholder="product name"><br> <input type="text" name="size" placeholder="product size"><br><br><button type="submit">Add product</button></form>')
})

router.post('/products',(req, res)=>{
    console.log(req.body);
    res.redirect('/')

})

module.exports=router;