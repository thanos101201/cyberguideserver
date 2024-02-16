const locationModel = require("../../models/location");

const addVisitors = async( coOrdinate, username) => {
    return await locationModel.find({
        coOrdinate : coOrdinate
    }).then((resp1) => {
        if(resp1.length === 0){
            let error = {
                type: 'Error',
                message: 'Location not found'
            }
            return error;
        }
        else{
            let dt = resp1[0].visitors;
            dt.push(username);
            locationModel.updateOne({
                coOrdinate: coOrdinate
            }, {
                visitors: dt
            }).then((resp2) => {
                let data = {
                    type: 'Error',
                    message: 'Visitor added'
                }
                return data;
            }).catch((er2) => {
                let error = {
                    type: 'Error',
                    message: er2.message
                }
                return error;
            })
        }
    }).catch((er1) => {
        let error = {
            type: 'Error',
            message: er1.message
        }
        return error;
    })
}

module.exports = addVisitors;