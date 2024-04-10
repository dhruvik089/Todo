const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();


const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;

const connectDB = async () => {

    await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};

module.exports = connectDB;