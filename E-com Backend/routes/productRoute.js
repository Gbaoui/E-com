const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/productCtrl");
const { isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", isAdmin, createProduct);

router.get("/:id", getaProduct);
router.put("/wishlist", addToWishlist);
router.put("/rating", rating);

router.put("/:id", isAdmin, updateProduct);
router.delete("/:id", isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;
