const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 

dotenv.config(); 

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,    
        }); 
        console.log("MongoDb Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}; 
module.exports = connectDB;