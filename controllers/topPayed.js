const db = require('../connect')

module.exports.topPayed = (req,res) => {
    const sql = "SELECT DISTINCT `store` FROM `deliveries` ORDER BY `payed` DESC LIMIT 10"
    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}