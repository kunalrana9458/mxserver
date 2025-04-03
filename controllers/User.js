const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(402).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

