const axios = require('axios')
const express = require('express')
const router = express.Router();
const PostController = require('../controllers/post')


router.get('/',PostController.getPosts);

module.exports = router

