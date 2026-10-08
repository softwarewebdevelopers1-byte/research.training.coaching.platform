import dotenv from "dotenv";
import path from "path";

dotenv.config({path:`${path.resolve(process.cwd(),".env")}`});

const DotEnvFile = {
    port:process.env.LOCAL_PORT
};

export default DotEnvFile;
