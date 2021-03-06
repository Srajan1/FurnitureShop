const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            })
        console.log(`Mongo connected ${conn.connection.host}`);
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = connectDB;