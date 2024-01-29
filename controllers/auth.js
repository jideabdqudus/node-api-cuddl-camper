const path = require("path");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const AsyncHandler = require("../middleware/async");

// @desc    Register a user
// @route   GET /api/v1/auth/register
// @access  Public
exports.registerUser = AsyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
