exports.getPosts = (req,res) =>{
    res.json({
       posts:[
           {   
               id:1,
               title:"first post"
           },
           {   
            id:2,
            title:"Second post"
        },
        {   
            id:3,
            title:"third post"
        },
        {   
            id:4,
            title:"fourth post"
        }
       ]
    })
};