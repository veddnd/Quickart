const {User }= require('../models/user');
const express = require('express');
const router= express.Router();
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

router.post('/signup',async(req,res)=>{
    const {name,phone,email,password} = req.body;
    try{
        const existinguser= await User.findOne({email:email});
        if(existinguser){
            return res.status(400).json({message:'User already exists'});
        }

        const hashpassword= await bcrypt.hash(password,10);

        const result= await User.create({
            name:name,
            phone:phone,
            email:email,
            password:hashpassword
        })

        const token= jwt.sign({
            email:result.email,id:result._id
        },process.env.JSON_WEB_TOKEN_SECRET_KEY);

        res.status(200).json({
            user:result,
            token:token
        })
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error'});
    }
})

router.post('/signin',async(req,res)=>{
    const{email,password}=req.body;
    try{
        const existinguser=await User.findOne({email:email});
        if(!existinguser){
            res.status(404).json({msg:"user not found"})
        }
        const matchpass= await bcrypt.compare(password,existinguser.password);
        if(!matchpass){
            return res.status(400).json({message:'Invalid password'});
        }
        const token= jwt.sign({
            email:existinguser.email,id:existinguser._id
        },process.env.JSON_WEB_TOKEN_SECRET_KEY);

        res.status(200).json({
            user:existinguser,
            token:token,
            msg:"user authentication"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({message:'something went wrong '});
    }
});

    router.get('/',async(req,res)=>{
        const userlist= await User.find()
        if(!userlist){
            return res.status(404).json({message:'No user found'});
        }
        res.send(userlist);
    })

    router.get('/:id',async(req,res)=>{
        const user= await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:'No user found'});
        }
        res.send(user);
    })

    router.delete('/:id',async(req,res)=>{
        User.findByIdAndDelete(req.params.id).then(user=>{
            if(user){
                return res.status(204).json({message:'User deleted'});
            }
            else{
                return res.status(404).json({message:'User not found'});
            }

        }).catch(err=>{
            return res.status(500).json({success:false,error:err,message:'something went wrong'})
        })

    })
    
    router.put('/:id', async (req, res) => {
        try {
            const { name, phone, email, password } = req.body;
    
            const userexist = await User.findById(req.params.id);
            if (!userexist) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            let newpassword;
    
            if (password) {
                newpassword = bcrypt.hashSync(password, 10);
            } else {
                newpassword = userexist.hashpassword; // Corrected from `hashpassword` to `password`
            }
    
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    name,
                    phone,
                    email,
                    password: newpassword
                },
                { new: true } // Ensures the returned document is the updated one
            );
    
            if (!updatedUser) {
                return res.status(400).json({ message: 'Error updating the user' });
            }
    
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    });


module.exports = router;