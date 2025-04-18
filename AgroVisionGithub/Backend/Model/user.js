let mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    lon:{type:String,required:true},
    lat:{type:String,required:true},
    address:{type:String,required:true},
    district:{type:String,required:true}
})

mongoose.model("USER",userSchema)