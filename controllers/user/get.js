const userModel = require('../../models/user');

const get = (username) => {
    userModel.find({
        username: username
    }).then((resp1) => {
        if(resp1.length === 0){
            let error = {
                type: 'Error',
                message: 'User not found'
            }
            return error;
        }
        else{
            let data = {
                type: 'data',
                message: resp1[0]
            }

            return data;
        }
    }).catch((er) => {
        let error = {
            type:'Error',
            message : er.message
        }
        return error;
    });
}

module.exports = get;