import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import leaderboardRoutes from "./routes/leaderboard.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Million Zero Backend is running!");
});

// Routes
app.use("/api/leaderboard", leaderboardRoutes);

// IMPORTANT: Railway needs this
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
