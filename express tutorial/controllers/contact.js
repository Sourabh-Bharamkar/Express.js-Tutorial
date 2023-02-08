const rootDir=require('../util/path')
const path=require('path')
exports.getContactForm=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','/contact.html'))
}

exports.getContactFormSuccessMessage=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','/success.html'))

}