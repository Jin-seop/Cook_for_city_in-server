const express = require("express");
const router = express.Router();

const { mypageController } = require("../controller");

//회원정보 마이페이지
router.get("/", mypageController.mypageGet.get)

module.exports = router;