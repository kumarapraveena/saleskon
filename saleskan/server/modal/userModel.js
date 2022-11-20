const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    studentname:{
type:String,
required:true
    },
    semister:{
        type:Number,
        required:true
    },
    English:{
        type:Number,
        required:true
    },
    Maths:{
        type:Number,
        required:true
    },
    Science:{
        type:Number,
        required:true
    }

})
const studentModel=mongoose.model("markscollection",studentSchema)
module.exports=studentModel