const express=require("express")
const router=express.Router()
const studentModel=require("../modal/userModel")
router.post("/add",(req,res)=>{
    studentModel.create({studentname:req.body.studentname,semister:req.body.semister,English:req.body.English,Maths:req.body.Maths,Science:req.body.Science}).then((userData)=>{
        console.log(userData)
res.status(200).send('Student added Successfully')
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
var ar=[]
router.get("/getdata", (req,res)=>{

    studentModel.find().then((data)=>{
    //console.log(data.length)
    let english=0
    let maths=0
    let science=0
          data.map((item)=>{
             english=english+item.English
             maths=maths+item.Maths
             science=science+item.Science;
            // return item.English
         })
         english=english/(data.length)
         maths=maths/(data.length)
         science=science/(data.length)
         console.log(english.toFixed(2))
         console.log(maths.toFixed(2))
         console.log(science.toFixed(2))
         res.send(`english:${english.toFixed(2)}  maths:${maths.toFixed(2)}  science:${science.toFixed(2)}`)
        //  res.sendStatus(english)
        // res.sendStatus(english)
        //   res.status(200).send(english)
        // res.send(data)
    //    var obj= JSON.parse(data)
    //    console.log(obj)
    }).catch((err)=>{
        res.send(err)
    })
})

// console.log(obj)
module.exports=router