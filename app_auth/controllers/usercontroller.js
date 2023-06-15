const users = require('../Modal/user_schema')

async function handleAllUser(req,res){
    const alluser = await users.find({});
    return res.status(200).json(alluser) 

}
async function handleGetUserById(req,res){
    const userId = await users.findById(req.params.id);
    console.log(userId)
    if(!users){return res.status(400).json({mes:"someting went wrong",id:userId._id})}
    return res.status(200).json(userId) 

}
async function handleUpdateUserById(req,res){
    const upUser = await users.findByIdAndUpdate(req.params.id,{username:"varun"});
    return res.status(201).json(upUser) 

}
async function handleDeleletUserById(req,res){
    const delUser = await users.findByIdAndDelete(req.params.id);
    return res.status(200).json(delUser) 

}

async function handleCreateUser(req,res){
    console.log("method calllllll")
    const {email,Password,username} = req?.body;
    try {
        const existemail = users.findOne({email})
        if(!existemail){
            return res.status(500).json({mes:"Email Already Exist"}) 
        }else{
            if(!username||!Password||!email) {
                return res.status(400).json({mes:"All the fields are required"})  
              }
           const createuser =await users.create({
              username: username,
              Password:Password,
              email:email
           });
           
          return res.status(201).json({mes:"succesfully created",id:createuser._id}) 
        }
    } catch (error) {
        
    }
    if(!username||!Password||email) {
          return res.status(400).json({mes:"All the fields are required"})  
        }
     const createuser =await users.create({
        username: username,
        Password:Password,
        email:email
     });
     
    return res.status(201).json({mes:"succesfully created",id:createuser._id}) 

}

module.exports = {handleAllUser,handleCreateUser,handleGetUserById,handleUpdateUserById,handleDeleletUserById}