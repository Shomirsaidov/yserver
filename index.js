const express = require('express')
const db = require('./connect.js')

const { deliveriesRouter } = require('./routers/deliveriesRouter.js');
const { countRouter } = require('./routers/countRouter.js');

const app = express()
require('dotenv').config();
const PORT = process.env.PORT

app.use(express.urlencoded({extended: false}))
app.use('*', (req,res,next) => {
	res.set('Access-Control-Allow-Origin','*')
	next()
})
app.use('/delivery', deliveriesRouter)
app.use('/counts', countRouter)


app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))