const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();
const morgan = require('morgan');
const {getPost} = require('./routes/post');
const PostRoutes = require('./routes/post');
const bodyParser = require('body-parser')

// middleware

app.use(morgan("dev"));
app.use(bodyParser.json())


// db 
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB is connected'))
.catch(err=>console.log('Connection faild '+err));

mongoose.connection.on('error',err=>{
    console.log(`Connection is failed ${err}`);
})
//routes
app.use('/',PostRoutes);

const port = process.env.PORT || 8000;
app.listen(port,()=> console.log(`A node server is listening on port: ${port}`));