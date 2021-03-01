const express = require('express');
const app = express()

const post = require('./routes/post')

app.get('/',post.getPost)

const port = 80
app.listen(port,()=> console.log(`A node server is listening on port: ${port}`))