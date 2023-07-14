const db = require('../connect')
module.exports.topDebts = (req,res) => {
    // const sql = "SELECT DISTINCT `store`,`rest` FROM `deliveries` WHERE `rest` > 0 ORDER BY `rest` DESC LIMIT 10";   
    const sql = "SELECT DISTINCT `store` FROM `deliveries` ORDER BY `rest` DESC"
    db.connection.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные отданы !");

        res.send(results)
    });
}
