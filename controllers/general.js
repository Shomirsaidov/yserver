const db = require('../connect')

module.exports.general = (req,res) => {
	const response = {total_payed: null, total_quantity: null, total_rest: null, total_regular: null, 
		total_salty: null, rest_regular: null,rest_salty: null, rest_total: null}
    const sql = "SELECT SUM(payed) as `payed` FROM `deliveries`"
    db.connection.execute(sql, (err,results) => {
        response.total_payed = results?.[0]
   })

   db.connection.execute("SELECT SUM(quantity) as `quantity` FROM `deliveries`", (err,results) => {
        response.total_quantity = results?.[0]
   })

   db.connection.execute("SELECT SUM(rest) as `debt` FROM `deliveries`", (err,results) => {
        response.total_rest = results?.[0]
   })

   db.connection.execute("SELECT SUM(`quantity`) as regular FROM `deliveries` WHERE `type` = 'regular' GROUP BY `type`", (err,results) => {
        response.total_regular = results?.[0].regular
   })

   db.connection.execute("SELECT SUM(`quantity`) as salty FROM `deliveries` WHERE `type` = 'salty' GROUP BY `type`", (err,results) => {
        response.total_salty = results?.[0].salty
   })

   db.connection.execute("SELECT `rest_regular` FROM `utils` WHERE `id` = 1", (err,results) => {
        response.rest_regular = results?.[0].rest_regular
   })

   db.connection.execute("SELECT `rest_salty` FROM `utils` WHERE `id` = 1", (err,results) => {
        response.rest_salty = results?.[0].rest_salty
        response.rest_total = response.rest_regular + response.rest_salty

        res.send(response)
   })

   
}





