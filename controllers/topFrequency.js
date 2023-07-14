const db = require('../connect')

module.exports.topFrequency = (req,res) => {
    const sql = "SELECT `store` FROM `deliveries` GROUP BY `store` ORDER BY COUNT(*) DESC LIMIT 10 "
    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}