import connectdb from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
})

// import { db_name } from './constant.js';
// import express from "express";
// const app = express(); 


connectdb();
// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
//         console.log("mongoose is connected")
//     } catch (error) {
//         console.error("error",error)
//     }
// })()