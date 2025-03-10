import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true }, // Unique Clerk user ID
  firstName: { type: String }, 
  lastName: { type: String },
  email: { type: String, unique: true, sparse: true }, // Email should be unique but nullable
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

export default User;
