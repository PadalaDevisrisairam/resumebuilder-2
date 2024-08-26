const express=require('express')
const resforrou=express.Router();
const user=require('../models/resumeform');
const {body,validationResult}=require('express-validator');
resforrou.post('/resforrou',
    [
        body('name','minimum size 6').isLength({min:6}),
        body('email','minimum size 6').isLength({min:6}),
        body('phonenumber','minimum size 6').isLength({min:6}),
        body('education','minimum size 6').isLength({min:6}),
        body('skills','minimum size 6').isLength({min:6})
        ,body('linkedinurl','minimum size 6').isLength({min:6}),
        body('githuburl','minimum size 6').isLength({min:6})
    ]
    ,async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    try{
        await user.create({
            name:req.body.name,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            education:req.body.education,
            skills:req.body.skills,
            linkedinurl:req.body.linkedinurl,
            githuburl:req.body.githuburl

        })
        console.log(res);
        res.json({success:true})
    }
    catch(error){
        console.log(error.message);
        console.log(res);
        res.json({success:false});
    }
})
module.exports=resforrou;