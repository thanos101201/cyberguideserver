const userModel = require('../../models/user');

const deleteUser = async (username) => {
    return await userModel.deleteOne({
        username: username
    }).then((resp1) => {
        let data = {
            type: 'data',
            message: 'User deleted'
        }
        return data;
    }).catch((er1) => {
        let error = {
            type: 'Error',
            message: er1.message
        }
        return error;
    })
}

module.exports = deleteUser;