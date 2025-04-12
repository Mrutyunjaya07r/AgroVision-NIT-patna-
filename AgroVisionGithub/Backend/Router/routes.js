let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
let USER=mongoose.model('USER');
let CROP=mongoose.model('CROP');
let JWT=require('jsonwebtoken');
let {JWT_secret}=require('../key')
let requirelogin=require('../Middleware/requirelogin')





router.get("/",(req,res)=>{
    res.send("Hello from chat app")
})
const requireloginadmin=(req,res,next)=>{
    if(req.user && req.user.role==='admin'){
        next();
    }
    else{
        res.status(401).send({message:"You are not authorized to access this page"})
    }
}
router.get("/add",requirelogin,(req,res)=>{
    res.send('Hello middleware')
})
router.post("/signup",(req,res)=>{
    let {name,username,email,password,lat,lon,address,district}=req.body;
    if(!name||!username||!email||!password||!lat||!lon||!address||!district){
        return res.status(404).send('Not sign up')
    }
    let user=new USER({
        name,
        username,
        email,
        password,
        lat,
        lon,
        address,
        district
    })
    let result=user.save();
    console.log(result);
    res.send(result);
})
router.post("/signin",(req,res)=>{
    let {username,password}=req.body;
    if(!username||!password){
        return res.status(404).send('Not sign in') 
    }
    USER.findOne({username:username}).then((savedUser)=>{
        if(!savedUser){
            return res.status(404).send('Not a user')  
        }
        console.log(savedUser);
    })
    USER.findOne({password:password}).then((savedUser)=>{
        if(!savedUser){
            return res.status(404).send('Not a user')  
        }
        console.log(savedUser);
        let token=JWT.sign({_id:savedUser._id},JWT_secret);
        console.log(token);
        let currentUserid=savedUser._id;
        let lon=savedUser.lon;
        let lat=savedUser.lat;
        let address=savedUser.address;
        let district=savedUser.district
        res.json({token,currentUserid,lon,lat,address,district})

    })
})
router.post('/desease',(req,res)=>{
    let { image,
    crop,
    latitude,
    longitude,
    application_id,
    application_end_user_id}=req.body;
    if(!image||!crop||!latitude||!longitude||!application_id||!application_end_user_id){
        res.send('Fill all feilds')
    }

    let crope=new CROP({
        image,
        crop,
        latitude,
        longitude,
        application_id,
        application_end_user_id
    })
    let result=crope.save();
    console.log(result);
    res.send(result);
})







module.exports=router