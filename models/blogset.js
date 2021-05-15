const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
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
});
const blogset=mongoose.model('Blog',blogSchema);
module.exports=blogset;