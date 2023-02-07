const express=require('express')
const app=express()

const router=express.Router();

const path=require('path')
const rootDir=require('../util/path')

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','/add-product.html'))
})

router.post('/products',(req, res)=>{
    console.log(req.body);
    res.redirect('/')

})


module.exports=router;