const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API routes
router.use("/api", apiRoutes);

module.exports = router;
