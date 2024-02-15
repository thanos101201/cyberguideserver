const userModel = require("../../models/user");

const updateLocation = ( username, location) => {
    userModel.updateOne({
        username: username
    }, {
        currentLocation: location
    }).then((resp1) => {
        let data = {
            type: 'data',
            message: 'Location updated'
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

module.exports = updateLocation;