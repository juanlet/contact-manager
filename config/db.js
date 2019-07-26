const mongoose = require('mongoose');
const path = require('path');


const connectDB = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false});
        console.log('mongodb connected');

    }catch(err) {
        console.log(err.message);    
        process.exit(1);
    }   
}

module.exports = connectDB;