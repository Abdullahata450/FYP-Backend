import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;
