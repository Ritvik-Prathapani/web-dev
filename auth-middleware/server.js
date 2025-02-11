const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config");
const { authenticate, register, login, logout } = require("./middleware");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());    
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(session({
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxAge: 1000 * 30 * 30}  // 1-hour session
}));

console.log("🔍 MongoDB URI:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

// Routes
app.post("/register", register);
app.post("/login", login);
app.post("/logout", logout);
app.get("/protected", authenticate, (req, res) => {
    res.json({ message: "You have access to this protected route!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
