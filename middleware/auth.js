const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
    console.log("🔐 Entered auth middleware");

    const authHeader = req.headers.authorization;
    console.log("🧾 Authorization Header:", authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    console.log("🪙 Token extracted:", token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Decoded token:", decoded);

        const user = await User.findById(decoded.id);
        if (!user) {
            console.log("❌ User not found for ID:", decoded.id);
            return res.status(401).json({ message: "Invalid token: user not found." });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("❗ JWT verification error:", err.message);
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = auth;
