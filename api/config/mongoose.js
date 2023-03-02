const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();
const url=process.env.MONGODB_URI
mongoose.connect(url);

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting to db"));
db.once('open',function(){
    console.log("connection to the database");
});

module.exports=db;