const db = require('../connect')

module.exports.topPayers = (req,res) => {
    const sql = "SELECT sum(`payed`) as `payed`, `store` FROM `deliveries` GROUP BY `store` ORDER BY `payed` DESC"
    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}