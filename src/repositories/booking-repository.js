const {Booking} = require('../models')
const CrudRepository = require('./crud-repository');

class BookingRepository extends CrudRepository{
    constructor(){

    }
}
module.exports = BookingRepository