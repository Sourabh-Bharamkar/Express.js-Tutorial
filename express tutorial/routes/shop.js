const express=require('express')
const app=express();

const router=express.Router();

router.get('/',(req,res)=>{
    res.send('<h1> Hello from Express!</h1>')
})

module.exports=router;
