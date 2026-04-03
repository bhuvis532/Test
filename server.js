import dotenv from"dotenv"
import app from "./app.js"
import { connectDB } from "./config/db.js"

dotenv.config()
connectDB()

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})