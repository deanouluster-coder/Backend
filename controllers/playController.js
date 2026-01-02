const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "../data/zeros.json");

// Load or initialize zeros
let data = { openedZeros: [] };
if (fs.existsSync(dataFile)) {
  data = JSON.parse(fs.readFileSync(dataFile));
}

// Rewards mapping
const rewardsMap = {
  1: "No reward",
  2: "5 tokens",
  3: "10 tokens",
  4: "25$ PayPal",
  5: "25 tokens",
  6: "50$ PayPal",
  7: "No reward",
  8: "No reward",
  9: "Jackpot!"
};

// Open a zero
exports.openZero = (req, res) => {
  const { code } = req.body;

  if (!code || code.length !== 3) {
    return res.status(400).json({ success: false, message: "Invalid code" });
  }

  // Determine next zero
  const nextZero = data.openedZeros.length + 1;
  if (nextZero > 9) {
    return res.status(400).json({ success: false, message: "All zeros already opened" });
  }

  data.openedZeros.push(nextZero);

  // Save to file
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

  res.json({
    success: true,
    zero: nextZero,
    reward: rewardsMap[nextZero] || "No reward",
    openedZeros: data.openedZeros
  });
};

// Get list of opened zeros
exports.getOpenedZeros = (req, res) => {
  res.json({ success: true, openedZeros: data.openedZeros });
};
