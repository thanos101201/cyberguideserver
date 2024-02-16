const groupModel = require('../../models/group');

const get = async (groupName) => {
    return await groupModel.find({
        groupName: groupName
    }).then((resp1) => {
        if(resp1.length === 0){
            let error = {
                type: 'Error',
                message: 'Group not found'
            }
            return error;
        }
        let data = {
            type: 'data',
            message: resp1[0]
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

module.exports = get;