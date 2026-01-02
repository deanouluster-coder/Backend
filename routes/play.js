const express = require("express");
const router = express.Router();
const { openZero, getOpenedZeros } = require("../controllers/playController");

// Open a zero with 3-digit code
router.post("/open", openZero);

// Get list of opened zeros
router.get("/opened-zeros", getOpenedZeros);

module.exports = router;
