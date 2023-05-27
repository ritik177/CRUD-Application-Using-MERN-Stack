const mongoose = require("mongoose");

const DB ="mongodb+srv://ritik:1234@cluster0.qvqj0ma.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection stablished")).catch((error)=>console.log(error.message));