const locationModel = require('../../models/location');

const getLocation = async(coOrdinates) => {
    return await locationModel.find({
        coOrdinates: coOrdinates
    }).then((resp1) => {
        let data = {
            type: 'data',
            message : resp1[0]
        }
        return data;
    }).catch((er1) => {
        let error = {
            type: 'Error',
            message: er1.message
        }
        return error;
    });
}

module.exports = getLocation;