import jwt from 'jsonwebtoken';
import User from '../model/User.model.js'

const SecureRoute=async(req,res,next) => {
    try {
   
        const token = req.cookies.jwt;
   
        if(!token){
            return res.status(401).json({msg:"Not Authorized"})
        }

        const verified = jwt.verify(token,process.env.JWT_TOKEN);
        if(!verified){
            return res.status(403).json({msg:"Invalid Token"})
        }
        const user = await User.findById(verified.userId).select("-password");
        console.log(req.user);
        if(!user){
            return res.status(404).json({msg:"User not found"})
        }
        req.user=user;
        next()
        
    } catch (error) {
        console.log(error);
        res.status(501).json({ msg: "Internal Server Error" });
    }
}


export default SecureRoute;