const db = require('../connect')
module.exports.editDelivery = (req,res) => {
    const sql = "UPDATE `deliveries` SET `store` = ?, `date` = ?, `quantity` = ?, `type` = ?, `payed` = ?, `rest` = ?, `note` = ? WHERE `id` = ?";
    const data = [
    	req.body.store,
    	req.body.date,
    	req.body.quantity,
    	req.body.type,
    	req.body.payed,
    	req.body.rest,
    	req.body.note,
    	req.body.id
    ]

    db.connection.query(sql, data,function(err, results) {
        if(err) console.log(err);
        else console.log("Данные изменены !");
        res.redirect(process.env.CLIENT_URL + '/edit')
    });
}