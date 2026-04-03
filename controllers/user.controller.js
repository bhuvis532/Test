import req from "express/lib/request.js"
import services from "../services/user.services.js"



const usercontroll=async(req,res)=>{
    try{
        const data=await services.userservice()
        res.send(data)
    }catch(err){
        res.status(500).json({error:err.message  || "Internal Error Message"})
    }
}



const actorcontroll=async(req,res)=>{
    try{
        const id=parseInt(req?.params?.id)
        const act=await services.actorservice(id)
        res.status(200).json(act)
    }catch(err){
        res.status(500).json({error:err.message || "Internal error message" })
    }
}


const vegcontroll=async(req,res)=>{
    try{
        const b=req?.body
        const vegg=await services.vegservice(b)
        res.status(200).json(vegg)

    }catch(err){
        res.status(500).json({error:err.message || "internal error"})
    }
}



export default {usercontroll,actorcontroll,vegcontroll}