const express=require('express')
const app=express();

const router=express.Router();
const path=require('path')
const rootDir=require('../util/path')
const contactControllers=require('../controllers/contact')

router.get('/contact',contactControllers.getContactForm)

router.get('/success',contactControllers.getContactFormSuccessMessage)

module.exports=router;