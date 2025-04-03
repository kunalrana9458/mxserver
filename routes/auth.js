const express = require("express");
const { signUp } = require("../controllers/User");

const router = express.Router();

// User Sign-Up Route
router.post("/signup", signUp);

module.exports = router;
