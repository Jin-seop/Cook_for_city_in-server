const express = require("express");
const router = express.Router();

const { mypageController } = require("../controller");

//회원정보 마이페이지
router.post("/mypageGet", mypageController.mypageGet.post)

module.exports = router;