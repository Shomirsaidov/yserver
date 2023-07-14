const db = require('../connect')

module.exports.datesChart = (req,res) => {
    const sql = "SELECT `id`,`payed`, `date`,`rest`,`quantity`,`type`,`store` FROM `deliveries` ORDER BY `date` DESC"
    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}