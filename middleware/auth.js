const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    console.log(`req.headers.authorization : ${req.headers.authorization}`); //Bearer dfnjsdfhsdvn

    const token = req.headers.authorization?.split(" ")[1]; // ["Bearer", "dfnjsdfhsdvn"]

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = verifyToken;
