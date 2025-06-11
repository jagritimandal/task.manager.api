const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {

    //console.log(`req.headers.authorization : ${req.headers.authorization}`); //Bearer dfnjsdfhsdvn
    console.log("authorized.");
    const token = req.headers.authorization?.split(" ")[1]; // ["Bearer", "dfnjsdfhsdvn"]

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        req.user = await decoded;
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (err) {
        console.error('Token verification error:', err.message); // For logging
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = auth;
