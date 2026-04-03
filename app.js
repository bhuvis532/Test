import express from "express"
import cors from "cors"
import userrouter from "./routes/user.route.js"

const app=express()

app.use(cors())
app.use(express.json())

app.use(userrouter)

export default app