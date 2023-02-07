const express = require('express')
const app = express();

const router = express.Router();

const path = require('path');
const fs = require('fs')

router.get('/', (req, res) => {
    let message;

    let promise = new Promise((resolve, reject) => {
        fs.readFile('message.txt', (err, data) => {
            message = data;
            // console.log(message.toString())
            resolve();
        })
    }).then((value) => {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <form action="/message" method="post" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
                ${message.toString()} <br>
                <input type="text" name="message"><br><br>
                <input type="text" name="username" id="username" hidden value="">
                <button type="submit">Send</button>
            </form>
           
        </body>
        
        </html>`)
    })
})


router.post('/message', (req, res) => {
    console.log(req.body)
    fs.appendFile('message.txt',`${req.body.username} : ${req.body.message}` , (err) => { })
    res.redirect('/')

})

module.exports = router;