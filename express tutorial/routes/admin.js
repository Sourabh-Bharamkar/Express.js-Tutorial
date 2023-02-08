const express=require('express')
const app=express()

const router=express.Router();

const path=require('path')

const productControllers=require('../controllers/product')

router.get('/add-product',productControllers.getAddProduct)

router.post('/products',productControllers.postProducts)


module.exports=router;