const express = require("express");
const router = express.Router();

const { loginController } = require("../controller");

// 로그인 요청
router.post("/signin", loginController.signin.post);

// 로그아웃 요청
router.post("/signout", loginController.signout.post);

module.exports = router;