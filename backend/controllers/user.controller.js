import User from "../models/user.model.js"

export const getUsersForSideBar = async (req,res) => {
    try {

        const loggedInUserId = req.user._id

        const filteredUser = await User.find({_id : { $ne: loggedInUserId }}).select("-password")
        // const allUser = await User.find() // get user all include myself

        res.status(200).json(filteredUser)
        
    } catch (error) {
        console.log("error in GetUserForSidebar Controller : " , error.message)
        res.status(500).json({error: "internal server error"})
    }
}