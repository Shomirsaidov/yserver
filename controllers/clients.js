const db = require('../connect')

module.exports.clients = (req,res) => {
    const sql = "SELECT * FROM `stores`"
    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}