const {BookingService} = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');


async function createBooking(req,res){
    // console.log("first,",req.body)
    const data = {
        flightId:req.body.flightId,
        userId:req.body.userId,
        noOfSeats : req.body.noOfSeats
    }
    try {
        const response = await BookingService.createBooking(data)
        SuccessResponse.data = response;
        return res.status(200).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error.message;

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
createBooking
}