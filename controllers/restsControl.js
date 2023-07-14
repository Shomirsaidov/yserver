const db = require('../connect')
require('dotenv').config()


function updateRestsRegular(amount,req,res) {

        req.body.prevRegular = Number(req.body.prevRegular)
        req.body.prevSalty = Number(req.body.prevSalty)
        amount = Number(amount)

        if(req.body.action == 'increase') {
            amount += req.body.prevRegular
        } else {
            amount = req.body.prevRegular - amount            
        }
        db.connection.query("UPDATE `utils` SET `rest_regular` = '" + amount + "' WHERE `id` = 1",function(err, results) {
                if(err) console.log(err);
                else {
                    console.log("ok ok ok ok")
                    // res.send("<h1 style='color: green; font-size: 40px'>Данные добавлены</h1>")
                    res.redirect(process.env.CLIENT_URL + '/rests')
                }
                
        });      
}

function updateRestsSalty(amount,req,res) {

        req.body.prevRegular = Number(req.body.prevRegular)
        req.body.prevSalty = Number(req.body.prevSalty)
        amount = Number(amount)

        if(req.body.action == 'increase') {
            amount += req.body.prevSalty
        } else {
            amount = req.body.prevSalty - amount           
        }
        db.connection.query("UPDATE `utils` SET `rest_salty` = '" + amount + "' WHERE `id` = 1",function(err, results) {
                if(err) console.log(err);
                else {
                    console.log("ok ok ok ok")
                    res.redirect(process.env.CLIENT_URL + '/rests')
                }
                
        });      
}

module.exports.restsControl = (req,res) => {


    if(req.body.type == 'regular') {
        updateRestsRegular(req.body.amount,req,res) 
    } else {
        updateRestsSalty(req.body.amount,req,res)
    }

    



}







