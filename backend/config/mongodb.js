import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database connected"));

    // Correct way to include the database name
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'medzo'  // Specify the database name here
    });
}

export default connectDB;
