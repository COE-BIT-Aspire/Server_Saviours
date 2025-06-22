import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://ishanvarshu:Mahadev24@cluster0.yckco.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}