const db = require('../connect')

module.exports.recentDeliveries = (req,res) => {
    var sql = "SELECT * FROM `deliveries` ORDER BY `id` DESC LIMIT 25"

    if(req.query.limit == 'none') {
    	sql = "SELECT * FROM `deliveries` ORDER BY `id` DESC"
    }

    db.connection.execute(sql, (err,results) => {
        res.send(results)
   })
}