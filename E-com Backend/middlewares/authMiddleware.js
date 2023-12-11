const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  try {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Ensure decoded has id before querying the database
        if (decoded?.id) {
          const user = await User.findById(decoded.id);

          // Set req.user only if a valid user is found
          if (user) {
            req.user = user;
          } else {
            console.log("User not found in the database");
          }
        } else {
          console.log("Decoded token does not have an id");
        }
      }
    }
  } catch (error) {
    console.error("Authentication error:", error.message);
  } finally {
    // Continue to the next middleware or route handler
    next();
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  try {
    // Ensure that req.user exists and has the required properties
    if (req.user && req.user.email) {
      const adminUser = await User.findOne({ email: req.user.email });

      if (!adminUser || adminUser.role !== "admin") {
        throw new Error("You are not an admin");
      }
    } else {
      console.log("User not authenticated");
    }
  } catch (error) {
    console.error("isAdmin error:", error.message);
    throw error; // Rethrow the error for consistency
  } finally {
    next();
  }
});

module.exports = { authMiddleware, isAdmin };
