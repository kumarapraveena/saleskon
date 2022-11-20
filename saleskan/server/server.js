const express=require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const mongoose=require("mongoose")
const userController=require("./user/user")
app.listen(3006,(err)=>{
if(!err){
    console.log("Listening to the port 3006")
}
else{
    console.log("Error in Connection to the port")
}
})
mongoose.connect("mongodb://localhost:27017/saleskan",(data)=>{
console.log("Connectet DB SuccessFully...")
},(err)=>{
console.log(err)
})
app.use("/user",userController)