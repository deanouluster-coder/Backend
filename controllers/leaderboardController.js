import leaderboard from "../data/leaderboard.js";

export const getLeaderboard = (req, res) => {
  res.json({
    success: true,
    players: leaderboard
  });
};
