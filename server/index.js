const express=require("express");
const mongoose=require("mongoose");
const Customer = require("./models/Customer");
const CustomerModel=require("./models/Customer");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://admin1234:admin1234@cluster0.cztgkga.mongodb.net/SDP?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));

app.post("/newcustomer",async(req,res)=>{
    const customerName=req.body.customerName;
    const customerNumber=req.body.customerNumber;
    const customerEmail=req.body.customerEmail;
    const customer=new CustomerModel({name:customerName,phno:customerNumber,email:customerEmail});
    try{
    await customer.save();
    res.send("Inserted Values");}
catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
     CustomerModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
app.put("/upcustomer",async(req,res)=>{
    const upname=req.body.upName;
    const id=req.body.id;
    try{
    await CustomerModel.findById(id,(err,upcustomer)=>{
      upcustomer.name=upname;
      upcustomer.save();
        res.json(CustomerModel);
    });
    }

catch(err){
    console.log(err);
}});

app.put("/upcustomeremail",async(req,res)=>{
    const upemail=req.body.upEmail;
    const id=req.body.id;
    try{
    await CustomerModel.findById(id,(err,upcustomer)=>{
      upcustomer.email=upemail;
      upcustomer.save();
        res.json(CustomerModel);
    });
    }

catch(err){
    console.log(err);
}});

app.put("/upcustomernumber",async(req,res)=>{
    const upnumber=req.body.upNumber;
    const id=req.body.id;
    try{
    await CustomerModel.findById(id,(err,upcustomer)=>{
      upcustomer.phno=upnumber;
      upcustomer.save();
        res.json(CustomerModel);
    });
    }

catch(err){
    console.log(err);
}});


app.delete("/delcustomer/:id",async(req,res)=>{
    const id=req.params.id;
    await CustomerModel.findByIdAndRemove(id);
});
    app.listen(3002,()=>console.log("Server Ready."))