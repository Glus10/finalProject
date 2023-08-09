const User=require('../models/user');
const express=require('express')
const router=express.Router();
const bcrypt=require('bcryptjs');

console.log("users")


router.get('/',async(req,res)=>{

    const user=await User.find()

    if(!user){
        res.status(500).json({success:false})
    }
    res.send(user);
}) 

router.post('/',async(req,res)=>{
    console.log("Password from request body:", req.body.password);
    let user = new User({
        name: req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10),
        city:req.body.city,
        street:req.body.address,
        streetNum: req.body.streetNum,
        permission:req.body.permission
    })
    user =await user.save();
    if (!user)
    return res.status(404).send('error creating user ')
    
    res.json({message: "hey"});
})


router.post('/login',async(req,res)=>{
    const user = await User.findOne({name:req.body.name})
    if(!user)
    return res.status(400).send('The user not found')


    if(user && bcrypt.compareSync(req.body.password , user.password)){
        res.status(200).send('user Autenticated');
    }
    else{
        res.status(400).send('password is wrong!');
    }
    
})


module.exports=router;