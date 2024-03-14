const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientModel = require("./models/patient")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://aswagosh73:Aswa123@cluster0.xinjjtv.mongodb.net/patientDb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("hello darling...")
})

app.post("/registering",async(req,res)=>{
    let data =req.body
    console.log(data)
    let patient=new patientModel(data)
    let result =await patient.save()
    res.json({"statuse":"success"})
})

app.listen(8089,()=>{
    console.log("server is running")
})
