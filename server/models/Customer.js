const mongoose=require("mongoose");
const CustomerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true},
        phno:{
            type:Number,
            required:true
        },
        email:
        {
            type:String,
            required:true
        }
});
const Customer=mongoose.model("CustomerData",CustomerSchema);
module.exports=Customer;