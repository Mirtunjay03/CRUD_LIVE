const mongoose = require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://pandeymirtunjay2003:<db_root>@mirtunjaypandey.qstzy0i.mongodb.net/crud-live-aiml?retryWrites=true&w=majority&appName=MirtunjayPandey');
    if(conn){
        console.log('Database connected successfully');
    }
    else{
        console.log('Database connection failed');
    }   
}
module.exports=dbConn;