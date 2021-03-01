const axios = require('axios')

const getPost = (req,res)=>{
    res.send(`<h3>header 3</h3>`)
    const data 
    axios.get('http://www.google.com')
    .then(res=>{
        
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports={
    getPost
};