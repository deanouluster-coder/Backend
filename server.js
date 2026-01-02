import express from "express";
import cors from "cors";
import leaderboardRoutes from "./routes/leaderboard.js";

const app = express();

app.use(cors());
app.use(express.json());

// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("Million Zero Backend is running!");
});

// API ROUTES
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
