const express = require("express");
const router = express.Router();

const { recipeController } = require("../controller");

// 레시피 검색 요청
router.post("/recipesearch", recipeController.recipesearch.post);

module.exports = router;