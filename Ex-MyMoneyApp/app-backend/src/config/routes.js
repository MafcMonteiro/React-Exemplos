const express = require('express')

module.exports = function(server){
    
    // Definir ULR Base
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(route,'/billingCycles')

}