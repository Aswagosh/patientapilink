const mongoose=require("mongoose")
const patientSchema=mongoose.Schema({
    patientName:String,
    patientAddress:String,
    patientAdmn:String,
    patientDoctor:String,

})
const patientModel=mongoose.model("patient",patientSchema)
module.exports=patientModel