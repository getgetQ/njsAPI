var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var DeliverSchema = new mongoose.Schema({
    receiptNo: String,
    locationID: Number,
    slotID: Number,
    deliveryDate: Date,
    fullName: String,
    contactNo: Number,
    floorNo: Number,
    unitNo: Number,
    street: String,
    building: String,
    country: String,
    postCode: Number,
    createdBy: String,
    reservationNo: Number,
    dateCreated: Date,

})

DeliverSchema.plugin(mongoosePaginate)


const Deliver = mongoose.model('Deliver',DeliverSchema)


module.exports = Deliver;