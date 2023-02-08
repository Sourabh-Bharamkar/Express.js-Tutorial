const path=require('path')
exports.get404error=(req, res) => {

    res.sendFile(path.join(__dirname,'../','views','/404.html'))

}