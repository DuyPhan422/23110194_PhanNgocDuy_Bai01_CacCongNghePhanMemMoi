import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    address: String,
    phoneNumber: String,
    gender: Boolean,
    roleId: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;