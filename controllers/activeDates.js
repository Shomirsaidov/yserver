const db = require('../connect')

module.exports.activeDates = (req,res) => {
    const sql = "SELECT sum(`payed`) as `payed`, `date` FROM `deliveries` GROUP BY `date`"
    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}