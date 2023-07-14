const db = require('../connect')

function updateRestsRegular(rest_regular) {
        db.connection.query("UPDATE `utils` SET `rest_regular` = '" + rest_regular + "' WHERE `id` = 1",function(err, results) {
                if(err) console.log(err);
                else {
                    console.log("ok ok ok ok")
                }
                
        });      
}

function updateRestsSalty(rest_salty) {
        db.connection.query("UPDATE `utils` SET `rest_salty` = '" + rest_salty + "' WHERE `id` = 1",function(err, results) {
                if(err) console.log(err);
                else {
                    console.log("ok ok ok ok")
                }
                
        });      
}

module.exports.addDelivery = (req,res) => {

    console.log(req.body)
    var rest = 0
    const sql = "INSERT INTO `deliveries`(`id`,`store`,`date`,`payed`,`rest`,`quantity`,`type`,`note`) VALUES (null, ?,?,?,?,?,?,?)";
    const data = [
        req.body.store,
        req.body.date,
        req.body.payed,
        req.body.rest,
        req.body.quantity,
        req.body.type,
        req.body.note
    ]

    db.connection.query(sql, data,function(err, results) {
                if(err) console.log(err);
                else console.log("Данные добавлены");
                res.redirect(process.env.CLIENT_URL + '/recent')
    });

    if(req.body.type == 'regular') {
        db.connection.query("SELECT `rest_regular` FROM `utils` WHERE `id` = 1", data,function(err, results) {
                    if(err) console.log(err);
                    else {
                        rest = results[0].rest_regular
                        rest -= req.body.quantity
                        console.log(rest)

                        updateRestsRegular(rest)


                    }
                    
        });      
    } else {
        db.connection.query("SELECT `rest_salty` FROM `utils` WHERE `id` = 1", data,function(err, results) {
                    if(err) console.log(err);
                    else {
                        rest = results[0].rest_salty
                        rest -= req.body.quantity
                        console.log(rest)
                        updateRestsSalty(rest)
                    }
        })
    }

    



}







