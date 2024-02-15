const groupModel = require('../../models/group');

const post = (username, gropupName) => {
    let groupm = new groupModel();
    groupm.name = gropupName;
    groupm.userArray = [ username ];

    groupm.save().then((resp1) => {
        let data = {
            type: 'data',
            message: 'Group added'
        }
    }).catch((er1) => {
        let error = {
            type: 'Error',
            message: er1.message
        }
    })
}

module.exports = post;