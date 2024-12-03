import createToken from "../jwt/generateToken.js";
import User from "../model/User.model.js";
import bcrypt from 'bcryptjs'



export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const hasedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            name,
            email,
            password: hasedPassword
        })
        await newUser.save()
        if (newUser) {
            createToken(newUser._id, res);
            res.status(201).json({ msg: "User saved successfully",  user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            } });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(404).json({ msg: "Invalid User or Password" })
        }
        createToken(user._id, res);
        res.json({
            msg: "User Logged In Successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({msg:"User Loggout Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

export const getUserProfile=async (req,res)=>{
    try {
        const loggedInUser=req.user._id;
        const allUsers= await User.find({_id:{$ne:loggedInUser}}).select("-password")
        res.status(201).json(
            {allUsers}
        )
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error Fetching user" })
        
    }
}