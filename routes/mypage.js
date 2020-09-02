const express = require("express");
const router = express.Router();

const { mypageController } = require("../controller");

//회원정보 마이페이지
router.get("/mypageGet", mypageController.mypageGet.get)

//내가 쓴 댓글이 해당되는 게시글로 이동
router.post("/mypagetocomment", mypageController.mypagetocomment.post)

//즐겨찾기 해당페이지로 디동
router.post("/mypagetofavorites", mypageController.mypagetofavorites.post)

//회원탈퇴 요청
router.patch("/Leave", mypageController.Leave.patch)

//회원 정보 수정
router.put("/setupPut", mypageController.setupPut.put)
module.exports = router;