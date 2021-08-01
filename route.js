const router= require('route');
const express= require('express');
const Post = require('../model/schema');

//Getting route for post and post_id
router.get('/',  (req, res)=>{
    res.send({message: 'The data is loading and may take sometime'})
});

//Getting Post
router.get('/api/post', async(req, res)=>{
const GetPost= await post.find();
res.json({message: 'Our message is clear'})
})

//Getting Specific Post
router.get('/api/post_Id', async (req, res) => {
    const post= await post.findById(req.param.post_Id);
    res.json({message: 'Welcome to the homepage'})
   });

//Creating post for the main post
router.post('/api/post', async(req, res) =>{
    const Post= new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        createAt: req.body.createAt
    });
    try{
    const SavedPost= await post.saved();
}
    catch(e){
        res.send ({message: 'error'})
    }
   });

   //Getting userProfile
router.get('/api/userProfile', async (req, res)=>{
   const GetuserProfile= await userProfile.find();
   res.json('Hello you');
   })

   //Getting specific userProfile_Id
router.get('/api/userProfile_Id', async (req, res) => {
    const SpecificUserProfile= await userProfile.findById(req.param.userProfile_Id);
    res.json('userProfileId')
  });

  //Posting specific userProfile_Id
  route.post('api/userProfile', async (req, res)=>{
const Post= new Post({
    userName: req.body.userName,
    email: req.body.userName
})

try{
const PostUser= userProfile.saved();
}
catch(e){
res.json({message: 'Get going'})
}
console.log('We are here again')
  })

  //Getting comment
  router.get('/api/comment', async (req, res)=>{
   const Commentary= await comment.find();
    res.send({message: 'The data is loading and may take sometime'})
});

//Getting specific comment
router.get('/api/comment_Id', async (req, res)=>{
    const Commentary= await comment.findById(req.param.comment_Id)
})
   
//Creating specific comment
router.post('/api/comment', async(req, res)=>{
    const comment= new comment({
      commenter: req.body.commenter,
      comment_Content: req.body.comment_Content,
      comment_Date: req.body.comment_Date  
    })
    try{
const saveComment= await comment.saved();
    }
    catch(error){
res.json({message: 'error'})
    }
})

  //listening on port to the server 
const port= process.env.PORT||3000;
app.listen(port, (req, res)=>{
    console.log(`listening to the server at ${port}...`)
})


