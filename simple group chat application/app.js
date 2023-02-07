const express=require('express');
const app=express();

const loginRoute=require('./routes/login')
const chatPageRoute=require('./routes/chatPage')
const message=require('./message.txt')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(loginRoute)
app.use(chatPageRoute)


app.listen('3000');
