import mongoose from "mongoose";
import { db_name } from "../constant.js";

const connectdb = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
       console.log(`mongodb instance connected ${connectionInstance.connection.host}`)
       
    } catch (error) {
        console.log(`mongodb connection failure ${error}`);
        process.exit(1);
    }
}

export default connectdb