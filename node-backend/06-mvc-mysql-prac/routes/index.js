const express = require("express");
const router = express.Router();
const ctrl = require("../controller/ctrlUsers");

router.get("/", ctrl.home);

router.post("/signup", ctrl.signup);

router.post("/login", ctrl.login);

module.exports = router;
