import mongoose from 'mongoose';

let connectDB = async () => {
    if (!process.env.MONGODB_URI) {
        console.error('>>> Missing MONGODB_URI in environment.');
        return false;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('>>> Connection to MongoDB has been established successfully.');
        return true;
    } catch (error) {
        console.error('>>> Unable to connect to MongoDB:', error);
        return false;
    }
}

export default connectDB;