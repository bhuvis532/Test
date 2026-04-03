import dns from "dns"

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first")

import mongoose  from "mongoose";

export const connectDB=async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_DB)
        console.log("MongoDB Connected")
    }catch(error){
        console.log("DB Connection Error:",error.message)
    }
}
