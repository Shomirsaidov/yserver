const db = require('../connect')
module.exports.addStore = (req,res) => {


    const sql = "INSERT INTO `stores`(`id`,`name`,`address`,`tel`,`person`) VALUES (null, ?,?,?,?)";
    const data = [
        req.body.store,
        req.body.address,
        req.body.tel,
        req.body.person,
    ]

    db.connection.query(sql,data,(err, results) => {
        
        res.redirect(process.env.CLIENT_URL + '/clients')
        
    });




}