const express = require('express');
const http=require('http')
const app = express();
const cors = require('cors');

const path = require("path");
const bodyParser = require('body-parser');
const server = http.createServer(app);
const cookieParser=require("cookie-parser")
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//imports
const login=require('./routes/login')
const register=require('./routes/register')
const getAllUsers=require('./routes/getAllUsers')
app.use('/register',register)
app.use('/login',login)
app.use('/allusers',getAllUsers)


module.exports=app;

