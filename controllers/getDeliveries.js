const db = require('../connect')
module.exports.getDeliveries = (req,res) => {
    const sql = "SELECT * FROM `deliveries`";
    
    db.connection.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные добавлены");
        res.send(results)
    });
}