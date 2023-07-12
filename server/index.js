import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
//User Cors for all routes(you can use the routes in you frontEnd)
app.use(cors());




//Start Server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})