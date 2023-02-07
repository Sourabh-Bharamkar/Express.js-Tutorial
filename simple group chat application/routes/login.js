const express = require('express')
const app = express();

const router = express.Router();
const path = require('path')

router.get('/login', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/" method="get" onsubmit="saveUsernameToLocalStorage()">
            <input type="text" name="username" id="username" placeholder="username">
            <br><br>
            <button type="submit" id="loginButton">Login</button>
        </form>
        
        <script>
            
            function saveUsernameToLocalStorage(e) {
                
                console.log('hi')
                let username = document.getElementById('username').value;
                localStorage.setItem('username', username)
            }
        
        </script>
    </body>
    </html>`)
})


module.exports = router;