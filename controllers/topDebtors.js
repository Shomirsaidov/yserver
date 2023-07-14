const db = require('../connect')
module.exports.topDebtors = (req,res) => {
    const sql = "SELECT SUM(`rest`) as `debt`, `store` FROM `deliveries` GROUP BY `store` ORDER BY `debt` DESC"
    db.connection.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные отданы !");

        res.send(results)
    });
}
