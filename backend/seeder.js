const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;
        const sampleProduct = products.map(product => {
            return {...product, user: adminUser}
        });
        await Product.insertMany(sampleProduct);
        console.log('Data imported');
    }catch(err){
        console.error(err.message);
    }
}

const destroyData = async () => {
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

       
        console.log('Data deleted');
    }catch(err){
        console.error(err);
    }
};

if(process.argv[2] === '-d')    
    destroyData();
else
    importData();