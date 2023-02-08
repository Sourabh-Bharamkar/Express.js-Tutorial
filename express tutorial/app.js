
const express = require('express')
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes=require('./routes/contact')
const bodyParser = require('body-parser')
const path=require('path')
const errorControllers=require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)

app.use(errorControllers.get404error)

app.listen('3000');

