const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",  isAdmin, createCoupon);
router.get("/",  isAdmin, getAllCoupons);
router.get("/:id",  isAdmin, getAllCoupons);
router.put("/:id",  isAdmin, updateCoupon);
router.delete("/:id",  isAdmin, deleteCoupon);

module.exports = router;
