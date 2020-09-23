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

//레시피 즐겨찾기 추가
router.post("/recipefavorites", recipeController.recipefavorites.post);

//레시피 즐겨찾기 삭제
router.put("/recipefavoritesdelete", recipeController.recipefavoritesdelete.put);

//제철제료 표시
router.get("/materials", recipeController.materials.get)

//관리자 권한으로 댓글 삭제
router.put("/admincommentdelete", recipeController.admincommentdelete.put);
module.exports = router;