const db = require('../connect')
module.exports.getOne = (req,res) => {
    const sql = "SELECT * FROM `deliveries` WHERE id = '" + req.params['id'] + "'";
    
    db.connection.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные !");
        res.send(results)
    });
}