const mongoose = require('mongoose');
const URI ="mongodb://localhost:27017/";
const connectDB = async () => {
    try {
       await mongoose.connect(URI);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error: ",error);
    }
};

module.exports = {connectDB};