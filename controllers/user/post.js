const userModel = require('../../models/user');

const post = (name, username, password) => {
    let userm = new userModel();
    userm.name = name;
    userm.password = password;
    userm.username = username;

    userm.save().then((resp1) => {
        let data = {
            type: 'data',
            message: 'User added'
        }
        return data;
    }).catch((er) => {
        let error = {
            type: 'Error',
            message: er.message
        }
        return error;
    });
}

module.exports = post;