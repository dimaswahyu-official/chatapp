import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    fullName:{
        type: String,
        required : true,
    },
    username:{
        type: String,
        required : true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLenght: 6,
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic:{
        type:String,
        default:"",
    }
}, {timestamps: true})

const User = mongoose.model("User", userScheme);

export default User;