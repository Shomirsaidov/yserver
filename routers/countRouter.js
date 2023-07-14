const express = require('express')

const { topDebts } = require('../controllers/topDebts')
const { topDebtors } = require('../controllers/topDebtors')
const { topPayed } = require('../controllers/topPayed')
const { topFrequency } = require('../controllers/topFrequency')
const { activeDates } = require('../controllers/activeDates')
const { topPayers } = require('../controllers/topPayers')
const { datesChart } = require('../controllers/datesChart')
const { general } = require('../controllers/general')
const { restsControl } = require('../controllers/restsControl')


const countRouter = express.Router()
countRouter.get('/topDebts', topDebts)
countRouter.get('/topDebtors', topDebtors)
countRouter.get('/topPayed', topPayed)
countRouter.get('/topPayers', topPayers)
countRouter.get('/topFrequency', topFrequency)
countRouter.get('/activeDates', activeDates)
countRouter.get('/datesChart', datesChart)
countRouter.get('/general', general)
countRouter.post('/restsControl', restsControl)

module.exports.countRouter = countRouter