//require express
const express= require('express');
// routes
const User = require('../models/User')
//Router
const router= express.Router();

// post
router.post('/adduser',async (req,res)=> {

    const {name, age, phone, email}= req.body

    try {
        
    const newUser = new User({
        name, age, phone, email
    })
   const user= await newUser.save();
    res.send({msg:"user added", user})


}
catch(error) {
    console.log(error)

}
})

// get all users
router.get('/get', async(req,res)=> {
    try {
    const users= await User.find();
    res.send({msg: 'data fetched', users})
    }
    catch(error) {
        console.log(error)
    }


})

// PUT  update
router.put('/users/:id', async(req,res)=> {
    try {
        const {id} = req.params;
        const user= await User.findByIdAndUpdate({_id:id}, {$set: req.body})
        res.send({msg:'user updated', user})


    }
     catch(error) {
        console.log(error)
     }
})

// delete
router.delete('/delete/:id',async(req,res)=> {
    try {
        const {id} = req.params;
        const user= await User.findOneAndDelete({_id: id})
        res.send({msg: 'user deleted', user})

    }
    catch(error) {
        console.log(error)
    }
})
module.exports= router