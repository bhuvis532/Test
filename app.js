import express from "express"
import cors from "cors"
import userrouter from "./routes/user.route.js"

const app=express()
console.log("hi")
app.use(cors())
app.use(express.json())
console.log("commit")
app.use(userrouter)

export default app
