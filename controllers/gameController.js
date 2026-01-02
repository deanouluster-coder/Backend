import { gameState } from "../data/gameState.js";
import leaderboard from "../data/leaderboard.js";

export const playGame = (req, res) => {
  const { code, username } = req.body;

  if (!code || code.length !== 3) {
    return res.status(400).json({ success: false, message: "Invalid code" });
  }

  if (code === gameState.secretCode) {
    gameState.currentZero += 1;

    // Generate new secret for next round
    gameState.secretCode = Math.floor(100 + Math.random() * 900).toString();

    leaderboard.push({
      username,
      zerosOpened: gameState.currentZero,
      date: new Date()
    });

    return res.json({
      success: true,
      zeroOpened: gameState.currentZero,
      message: "Correct! Zero opened."
    });
  }

  return res.json({ success: false, message: "Wrong code" });
};
