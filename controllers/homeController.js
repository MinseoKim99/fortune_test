const db = require("../models/index"),
    Fcontents = db.fcontents,
    Fcolor = db.fcolor,
    Ftime = db.ftime,
    Op = db.Sequelize.Op;
// min = 1,
// contentsMax = 24,
// colorMax = 34,
// timeMax = 24;

// const randContents = Math.floor((Math.random() * (contentsMax - min)) + min),
// randColor = Math.floor((Math.random() * (colorMax - min)) + min),
// randTime = Math.floor((Math.random() * (timeMax - min)) + min);

exports.showMain = (req, res) => {
    res.render("first");
}

exports.showFortune = async (req, res) => {
    const min = 1,
        contentsMax = 24,
        colorMax = 34,
        timeMax = 24;

    const randContents = Math.floor((Math.random() * (contentsMax - min)) + min),
        randColor = Math.floor((Math.random() * (colorMax - min)) + min),
        randTime = Math.floor((Math.random() * (timeMax - min)) + min);
    // let sql_contents = 'SELECT * FROM fcontents where idcontents=?;';
    // let sql_color = 'SELECT * FROM fcolor where idcolor=?;';
    // let sql_time = 'SELECT * FROM ftime where idtime=?;';
    // await db.query(sql_contents + sql_color + sql_time, [randContents, randColor, randTime], (err, rows, fields) => {
    //     // if(err){
    //     //     console.log(err)
    //     //     res.sendStatus(500)
    //     //     return
    //     //   }
    //     if (err) throw err;
    //     console.log(rows);
    //     res.render("second", {color : rows.color});
    // });
    try {
        contents = await Fcontents.findOne({
            raw: true,
            // attributes : ['contents'],
            where: {
                idcontents: randContents
            }
        });

        color = await Fcolor.findOne({
            raw: true,
            // attributes : ['color'],
            where: {
                idcolor: randColor
            }
        });

        time = await Ftime.findOne({
            raw: true,
            // attributes : ['time'],
            where: {
                idtime: randTime
            }
        });

        console.log("확인: ", contents, color, time);

        res.render("second", { contents: contents.contents, color: color.color, time: time.time });
    } catch (err) {
        console.log("db 오류: " + err);
        res.status(500).send({
            message: err.message
        });
    }
};