const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS
app.use(cors());

// ✅ JSON
app.use(express.json());

// 🔌 MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("❌ DB Error:", err));

// 📦 Schema
const reservationSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  guests: Number,
  date: String,
  time: String,
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

// 🟢 Test
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 🟢 Create Reservation
app.post("/api/reservations", async (req, res) => {
  try {
    console.log("🔥 REQUEST RECEIVED");
    console.log("📦 BODY:", req.body);

    const { fullName, phone, guests, date, time } = req.body;

    if (!fullName || !phone || !guests || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields ❌",
      });
    }

    const newReservation = await Reservation.create({
      fullName,
      phone,
      guests,
      date,
      time,
    });

    console.log("🔥 SAVED SUCCESSFULLY");

    return res.status(201).json({
      success: true,
      message: "Reservation created successfully ✅",
      data: newReservation,
    });
  } catch (err) {
    console.log("❌ FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error ❌",
    });
  }
});

// 🟢 Get all
app.get("/api/reservations", async (req, res) => {
  try {
    const data = await Reservation.find();
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Error fetching data ❌" });
  }
});

// 🚀 Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend is running 🚀 on port ${PORT}`);
});
