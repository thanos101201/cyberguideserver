const groupModel = require("../../models/group");
const userModel = require('../../models/user');
const join = (groupName, username) => {
    groupModel.find({
        name: groupName
    }).then((resp1) => {
        if(resp1.length === 0){
            let error = {
                type: 'Error',
                message: 'Group not found'
            }
    
            return error;    
        }
        else{
            userModel.find({
                username: username
            }).then((resp3) => {
                if(resp3.length === 0){
                    let error = {
                        type: 'Error',
                        message: 'User not found'
                    }
                    return error;
                }
                else{
                    let dt = resp1[0].userArray;
                    dt.push(username);
                    groupModel.updateOne({
                        name: groupName
                    }, {
                        userArray: dt
                    }).then((resp2) => {
                        let data = {
                            type: 'data',
                            message: 'Joined group'
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
            }).catch((er3) => {
                let error = {
                    type: 'Error',
                    message: er3.message
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
    });
}

module.exports = join;