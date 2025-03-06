import mongoose from "mongoose";

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB ☑️");
    }catch(err){
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

export default connectToDB;