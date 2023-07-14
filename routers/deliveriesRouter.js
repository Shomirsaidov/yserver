const express = require('express')

const { getDeliveries } = require('../controllers/getDeliveries');
const { addDelivery } = require('../controllers/addDelivery.js');
const { addStore } = require('../controllers/addStore.js');
const { clients } = require('../controllers/clients.js');
const { recentDeliveries } = require('../controllers/recentDeliveries.js');
const { getOne } = require('../controllers/getOne.js');
const { editDelivery } = require('../controllers/editDelivery')
const { password } = require('../controllers/password')
const { editPassword } = require('../controllers/editPassword')


const deliveries = express.Router()
deliveries.get('/clients', clients)
deliveries.get('/getDeliveries', getDeliveries)
deliveries.get('/getOne/:id', getOne)
deliveries.get('/recent', recentDeliveries)
deliveries.get('/password', password)
deliveries.get('/editPassword/:password', editPassword)
deliveries.post('/addDelivery', addDelivery)
deliveries.post('/addStore', addStore)
deliveries.post('/edit', editDelivery)


module.exports.deliveriesRouter = deliveries
