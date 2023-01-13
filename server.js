const express = require('express');
const http=require('http')
const app = require('./app');
const cors = require('cors');
const dbConnect=require('./config/dbConnect')
const path = require("path");
const bodyParser = require('body-parser');
const server = http.createServer(app);
const dotenv=require("dotenv")
dotenv.config()
// dbConnect
//app.use(bodyParser.urlencoded({ extended: false }))
//imports


const port = process.env.PORT ;
server.listen(port, () => console.log(`Listening on port ${port}...`));


