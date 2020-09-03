const db = require("../../models");

module.exports = {
    put: (req, res) => {
        console.log(req.session)
        const { id } = req.body
        if (req.session.session_userid === 'admin') {
            db.cookcomment.findOne({
                where: { id: id }
            }).then((data) => {
                db.cookcomment.destroy({
                    where: { id: data.id }
                }).then((result) => {
                    res.status(200).send("삭제완료")
                })
            })
        } else {
            res.status(404).send("요청이 잘못되었습니다.")
        }
    }
}