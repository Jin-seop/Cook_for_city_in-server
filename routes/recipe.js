const express = require("express");
const router = express.Router();

const { recipeController } = require("../controller");

// 로그인 요청
router.get("/recipeinfo", recipeController.recipeinfo.get);

module.exports = router;