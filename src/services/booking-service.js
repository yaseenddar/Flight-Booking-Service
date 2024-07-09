const axios = require('axios');

const BookingRepository = require('../repositories');
const {ServerConfig} = require('../config');
const db = require('../models');
const AppError = require ('../utils/errors/app-errors');

async function createBooking(data){
    return new Promise((resolve,reject) =>{
        const result = db.sequelize.transaction(async function bookingImpl(t){
            const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
            const flightData = flight.data.SuccessResponse.data;
            if(data.noOfSeats > flightData.totalSeats){
                 reject(new AppError('Not Enought seats available',400))
            }
            resolve(true)
        });
    })
}
module.exports = {
    createBooking,
}