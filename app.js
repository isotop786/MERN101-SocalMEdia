const express = require('express');
const app = express()
const morgan = require('morgan')
const {getPost} = require('./routes/post')
const PostRoutes = require('./routes/post')


app.use(morgan("dev"))

app.use('/',PostRoutes)

const port = 80
app.listen(port,()=> console.log(`A node server is listening on port: ${port}`))