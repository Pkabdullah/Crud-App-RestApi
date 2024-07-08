import mongoose  from "mongoose";


const connectionstr =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to database");
    } catch (error) {
        console.log("Error Try Again" ,error)
    }
}
export default connectionstr ;