const express = require("express");
const router = express.Router();

const {
  GetVendorCustomers,
} = require("../Controller/CustomerController");

const {
  vendorAuthMiddleware,
} = require("../Midleware/VendorAuthMiddleware");

router.get(
  "/vendor",
  vendorAuthMiddleware,
  GetVendorCustomers
);

module.exports = router;