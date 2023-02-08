const rootDir=require('../util/path')
const path=require('path')
exports.getAddProduct=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','/add-product.html'))
}

exports.postProducts=(req, res)=>{
    console.log(req.body);
    res.redirect('/')

}

exports.getProducts=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','/shop.html'))
}