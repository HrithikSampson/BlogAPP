const blogset=require('./../models/blogset');
const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
router.get('/comments',async (req,res)=>{
    comments = await blogset.find({});
    res.render('index',{ comments:comments });
});
router.get('/comments/new',(req,res)=>{
    res.render('new');
    
    

});
router.get('/comments/:id',async (req,res)=>{
    const {id}=req.params;
    const foundComment=await blogset.findOne({'id':id});
    console.log(foundComment);
    res.render('show',{c:foundComment});
});
router.get('/comments/:id/edit',async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const foundComment=await blogset.findOne({'id':id});
    console.log(foundComment);
    res.render('edit',{c:foundComment});
});
router.post('/comments',async(req,res)=>{
    const { username, body } = req.body;
    await blogset.create({'id':uuid(),'username':username,'body':body});
    res.redirect('/comments');
})
router.patch('/comments/:id',async(req,res)=>{
    const {id}=req.params;
    console.log(req.body);
    const updatedCommentBody=req.body.body;
    const foundComment=await blogset.updateOne({'id':id},{$set:{'body':updatedCommentBody}});
    foundComment.body=updatedCommentBody;
    res.redirect('/comments');
})

module.exports = router;