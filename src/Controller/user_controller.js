
import User from '../Models/user.js';
import argon2 from 'argon2'

export const getAllUser = async(req, res, next) => {
let users
    try {
        users = await User.find();
        
    } catch (error) {
     console.log(error)
    }
    if (!users || users.length === 0)  {
        return res.status(404).json({message: 'no users found'})};

   return res.status(200).json({users})

};

export const signup = async (req, res, next) => {
    const {name, email, password} = req.body
    try{
const existingUser = await User.findOne({email}) 
if (existingUser) { 
    return res.status(400).json({
        message:'User already exists'
    })}
    }
    catch(err){ return console.log(err)}

    const hashedPassword = await argon2.hash(password)

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[],
    });

    try {
    await user.save()
        
    } catch (err) { return console.log(err)}

    return res.status(201).json({
        user
    })
};


   export const login = async (req,res,next) =>{
    const { email, password } = req.body
    let existingUser;
   try{
    const existingUser = await User.findOne({email})
   } catch(err){
    return console.log(err)}


    if (!existingUser) {
        return res.status(404).json({message:'User not found, kindly signup'})
    }

   const isPasswordCorrect = await argon2.verify(password, existingUser.hashedPassword);

   if (!isPasswordCorrect) {
    return res.status(400).json({message:'Password incorrect,please try again'})
   }

   return res.status(200).json({message:'login succesfull'});


}
