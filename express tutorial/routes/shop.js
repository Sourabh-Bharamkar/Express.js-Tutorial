const express=require('express')
const app=express();

const router=express.Router();
const path=require('path')
const rootDir=require('../util/path')
const productControllers=require('../controllers/product')

router.get('/',productControllers.getProducts)

module.exports=router;
