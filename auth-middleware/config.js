const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
    if (!process.env.MONGO_URI) {
        console.error("ERROR: MONGO_URI is undefined!");
        process.exit(1);
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
}
module.exports = connectDB;
