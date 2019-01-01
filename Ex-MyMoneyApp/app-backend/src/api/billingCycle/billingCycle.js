const restful = require('node-restful')
const mongoose = resful.mongoose

const credtSchema = new mongoose.Schema({
    name: {type: String, require: true},
    value: {type: Number, min: 0, require:  true}
})

const debtSchecma = new mongoose.Schema({
    name: {type: String, require: true},
    value: {type: Number, min: 0, require:  true},
    status: {type: String, required:false, uppercase:true, enum:['PAGO','PENDENTE','AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, require: true},
    month: {type:Number, min:1, max:12, require: true},
    year: {type:Number,min:1970, max:2100, required:true},
    credits:[credtSchema],
    debts:[debtSchecma]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)