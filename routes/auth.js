const express = require("express");
const { signUp,login } = require("../controllers/User");

const router = express.Router();

// User Sign-Up Route
router.post("/signup", signUp);
router.post("/login",login)

module.exports = router;
