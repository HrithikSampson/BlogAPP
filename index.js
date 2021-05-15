const express=require('express');
const mongoose=require('mongoose');
const seedDB=require('./seed');
const blogset=require('./models/blogset')
const commentRoutes=require('./routes/routes')

mongoose.connect('mongodb://localhost:27017/blogApp',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connection open"))
.catch(e=>{console.log(e);console.log("connection error")});



const app= express();
const path=require('path');
const methodOverride=require('method-override');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const { v4: uuid } = require('uuid');

/*const blogSchema=new mongoose.Schema({
    username:{
        type:String,
        maxLength:50,
        required:true
    },
    id:{
        type:String,
        required:true

    },
    body:{
        type:String,
        required:true
    }
})*/
//const blogset=mongoose.model('Blog',mongoose.Schema);//stored as blogs

//seedDB();
app.use(commentRoutes);

////
/////
//////
//////Comments
//////
/////
////
/*app.get('/comments',async (req,res)=>{
    comments = await blogset.find({});
    res.render('index',{ comments:comments });
});*/
app.listen(8844,()=>console.log("Server listening on port 8844"));

/*app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>");
});

app.get('/user',(req,res)=>{
    const {username,password}=req.query;
    res.send(`${username} logged in with ${password}`);

});
app.get('/jerry',(req,res)=>{
    res.send("hello i am jerry , dont tell tom i am here!");
});
app.get('/subreddit/:params',(req,res)=>{
    console.log(req.params);
    const {params}=req.params;
    res.send(`This is ${params}`);
});
// Query parameters
app.get('/search',(req,res)=>{
    const {q}=req.query;
    console.log(q);
    
    res.send(`Search for ${q}<br><h5>Search result for ${q}</h5>`);
    //res.send(``);
});
app.get('/home',(req,res)=>{
    const foot=' day course';
    res.render('home',{str:foot});
});
*/
/*app.get('/comments/new',(req,res)=>{
    res.render('new');
    
    

});
app.get('/comments/:id',async (req,res)=>{
    const {id}=req.params;
    const foundComment=await blogset.findOne({'id':id});
    console.log(foundComment);
    res.render('show',{c:foundComment});
});
app.get('/comments/:id/edit',async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const foundComment=await blogset.findOne({'id':id});
    console.log(foundComment);
    res.render('edit',{c:foundComment});
});
app.post('/comments',async(req,res)=>{
    const { username, body } = req.body;
    await blogset.create({'id':uuid(),'username':username,'body':body});
    res.redirect('/comments');
})
/*
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send("POST REQUEST");
    
});
app.patch('/comments/:id',async(req,res)=>{
    const {id}=req.params;
    console.log(req.body);
    const updatedCommentBody=req.body.body;
    const foundComment=await blogset.updateOne({'id':id},{$set:{'body':updatedCommentBody}});
    foundComment.body=updatedCommentBody;
    res.redirect('/comments');
})
*/
