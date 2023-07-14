const db = require('../connect')
module.exports.password = (req,res) => {
    const sql = "SELECT * FROM `utils` WHERE id = 1";
    
    db.connection.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные !");
        res.send(results[0].password)
    });
}