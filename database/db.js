import mongoose, { connect } from 'mongoose'

const connectDB=()=>{
    mongoose.connect(process.env.MONG_URL).then(()=>{
        console.log("Database connection successfully..")
    })
}
export default connectDB