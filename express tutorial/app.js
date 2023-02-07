
const express = require('express')
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes=require('./routes/contact')
const bodyParser = require('body-parser')
const path=require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)

app.use((req, res) => {

    res.sendFile(path.join(__dirname,'views','/404.html'))

})

app.listen('3000');

