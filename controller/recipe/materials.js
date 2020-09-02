const db = require("../../models");

const materials = require("../../seasonal materials.json");
//게시판 제철재료 표시
module.exports = {
    get: (req, res) => {
        let date_value = new Date();
        console.log(date_value.getMonth())
        if (!req.session.session_id) {
            res.status(404).send("다시 시도해 주세요");
        } else {
            res.status(201).send(materials[date_value.getMonth()]);
        }
    }
}