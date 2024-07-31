import generateTokenAndSetCookie from "../Utils/generateToken.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signupUser = async(req, res) =>{
    try{
        const { fullName, username, password, confirmPassword, gender } = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error: " password don't match"})
        }

        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: "Username already exist"})
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser){
            //generaate JWT Token
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();

        res.status(201).json({
            _id: newUser.id,
            fullName : newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        })
        } else {
            res.status(400).json({error: "invalid user data"})
        }

        
    }catch(error){
        console.log("Error in signup Controller", error.message)
        res.status(500).json({error: "internal Server Error"})
    }
    // console.log("signup user")
}

export const loginUser = async(req, res) =>{
    try {
        const {username, password } = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user.id,
            fullName : user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.log("Error in Login Controller", error.message)
        res.status(500).json({error: "internal Server Error"})
    }
}

export const logoutUser = async (req, res) =>{
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged Out Successfully"})
    } catch (error) {
        console.log("Error in Logout Controller", error.message)
        res.status(500).json({error: "internal Server Error"})
    }
}