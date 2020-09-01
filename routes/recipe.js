const express = require("express");
const router = express.Router();

const { recipeController } = require("../controller");

// 레시피 검색 요청
router.post("/recipesearch", recipeController.recipesearch.post);

// 레시피상세페이지 요청
router.post("/recipedetail", recipeController.recipedetail.post);

// 레시피 별점 및 댓글
router.post("/recipecomment", recipeController.recipecomment.post);

//별점 댓글 수정

router.put("/recipecommentupdate", recipeController.recipecommentupdate.put);

module.exports = router;