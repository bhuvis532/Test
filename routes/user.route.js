import express  from "express";
import controller from "../controllers/user.controller.js";

const userrouter=express.Router()

userrouter.get('/username', controller.usercontroll)

userrouter.get('/getactors/:id',controller.actorcontroll)

userrouter.post('/addveggies', controller.vegcontroll)



export default userrouter