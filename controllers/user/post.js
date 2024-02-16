const userModel = require('../../models/user');

const post = async (name, username, password) => {
    let userm = new userModel();
    userm.name = name;
    userm.password = password;
    userm.username = username;

    return await userm.save().then((resp1) => {
        console.log('User added');
        let data = {
            type: 'data',
            message: 'User added'
        }
        // console.log(data);
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