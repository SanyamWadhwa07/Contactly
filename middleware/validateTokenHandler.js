const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")


const validateToken = asyncHandler(async (req, res, next) => {
    try {
        let authHeader = req.headers.authorization || req.headers.Authorization; 

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({ title: "Unauthorized", message: "No token provided, authorization denied" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.user = decoded; 
        next(); 
    } catch (err) {
        return res.status(401).json({ title: "Unauthorized", message: "User is not authorized" });
    }
    if(!token){
        res.status(401);
        throw new Error("User is not authorized")
    }
});
module.exports = validateToken;