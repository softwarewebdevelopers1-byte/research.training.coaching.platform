import express from "express";
import cors from "cors";
import DotEnvFile from "./Dotenv/DotEnvConfig.js";
import showBanner from "node-banner";

let app=express();

app.use(cors({origin:["http://localhost:5173"],credentials:true,methods:["GET","POST","PATCH","PUT","DELETE"]}));


app.listen(DotEnvFile.port,()=>{
    showBanner("RESEARCH SYSTEM STARTED");
}); 
