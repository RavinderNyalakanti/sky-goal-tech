const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv'); 
const User = require('../models/User');

dotenv.config(); 

module.exports = async(req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('received token: ', token.replace('Bearer ', ''))

    if (!token){
         return res.status(401).json({message: "no token authorization denied"})
    } 

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET); 
        console.log('Decoded token:', decoded);
        req.user = await User.findById(decoded.user.id).select('-password');
        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }
        next();
        
    } catch (error) { 
        console.log(error)
        res.status(401).json({message: "token is not valid"});
    }
}