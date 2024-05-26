const express = require('express'); 
const cors = require('cors'); 
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');  
const bodyParser = require('body-parser'); 

const app = express(); 
connectDB(); 

app.use(express.json()); 
app.use(cors());  
app.use(bodyParser.json()); 

app.use('/api/auth',authRoutes); 

module.exports = app; 
