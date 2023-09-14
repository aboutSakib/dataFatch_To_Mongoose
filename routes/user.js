const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/login", userControllers.getLogin);
router.post("/user", userControllers.postUser);
router.get("/profile/:userName", userControllers.getProfile);

module.exports = router;
