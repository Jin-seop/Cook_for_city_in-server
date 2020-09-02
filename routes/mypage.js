const express = require("express");
const router = express.Router();

const { mypageController } = require("../controller");

//회원정보 마이페이지
router.post("/mypageGet", mypageController.mypageGet.post)

//내가 쓴 댓글이 해당되는 게시글로 이동
router.post("/mypagetocomment", mypageController.mypagetocomment.post)

//즐겨찾기 해당페이지로 디동
router.post("/mypagetofavorites", mypageController.mypagetofavorites.post)

module.exports = router;