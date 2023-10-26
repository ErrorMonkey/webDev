const express = require("express");
const router = express.Router();
const ctrl = require("../controller/Cmain.js");

router.get("/", ctrl.main);

router.post("/login", ctrl.login);

module.exports = router;
