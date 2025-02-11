const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

require("dotenv").config();

const authenticate = (req, res, next) => {
    if (req.session.userId) {
        next();  // 
    } else {
        res.status(401).json({ message: "Unauthorized access! Please log in." });
    }
};

// Register User
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
};

// Login User
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        req.session.userId = user._id;  // Store user ID in session

        res.json({ message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
};

// Logout User
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Error logging out" });
        }
        res.json({ message: "Logout successful" });
    });
};
module.exports = { authenticate, register, login, logout };
