const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');
const blogset = require('./models/blogset')
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
//const blogset=mongoose.model('Blog',blogSchema);//stored as blogs
const comments=[{id:uuid(),username:"Hrithik Sampson",body:"This is the new beginning"},
    {
        id:uuid(),
        username:"Osama Bin Ladin",body:"This is the terrorist"
    },
    {
        id:uuid(),
        username:"Joe biden",
        body:"I am the old one and the weary one"
    },
    {
        id:uuid(),
        username:"gandhi",
        body:"the naked one"
    },
    {
        id:uuid(),
        username:"Rabindranath Tagore",
        body:"The illiterate one"
    }
];
async function  seed(){
    await blogset.insertMany(comments)
    .then(data=>console.log("DATA DB SEEDED:"+data))
    .catch(err=>console.log(err));
}
module.exports=seed;