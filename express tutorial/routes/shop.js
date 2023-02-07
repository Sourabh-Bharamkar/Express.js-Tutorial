const express=require('express')
const app=express();

const router=express.Router();
const path=require('path')
const rootDir=require('../util/path')

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','/shop.html'))
})

module.exports=router;