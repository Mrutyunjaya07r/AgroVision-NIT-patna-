let mongoose=require('mongoose');

let cropdiseaseShcema=new mongoose.Schema({
    image:{type:String,required:true},
    crop:{type:String,required:true},
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true},
    application_id:{type:String,required:true},
    application_end_user_id:{type:String,required:true}
})

mongoose.model("CROP",cropdiseaseShcema)