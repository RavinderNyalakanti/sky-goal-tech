const app = require('./app'); 
const PORT = process.env.PORT || 9090; 

app.listen(PORT,()=>console.log(`Server started on the port ${PORT}`)); 
