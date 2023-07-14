const db = require('../connect')
module.exports.editPassword = (req,res) => {
    const sql = "UPDATE `utils` SET `password` ='" + req.params['password'] + "' WHERE id = 1";
    
    db.connection.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные !");
        res.send('<h1>Вы изменили пароль</h1>')
    });
}