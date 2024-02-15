const groupModel = require("../../models/group")

const addChat = (chat, groupName) => {
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
        userModel.find({
            username: chat.name
        }).then((resp2) => {
            if(resp2.length === 0){
                let error = {
                    type: 'Error',
                    message: 'User not found'
                }
        
                return error;
            }
            else{
                let dt = resp1[0].chats;
                dt.push(chat);
                groupModel.updateOne({
                    name: groupName
                }, {

                }).then((resp3) => {
                    let data = {
                        type: 'Error',
                        message: 'Chat added'
                    }
            
                    return data;
                }).catch((er3) => {
                    let error = {
                        type: 'Error',
                        message: er3.message
                    }
            
                    return error;
                })
            }
        }).catch((er2) => {
            let error = {
                type: 'Error',
                message: er2.message
            }
    
            return error;
        })
    }).catch((er1) => {
        let error = {
            type: 'Error',
            message: er1.message
        }

        return error;
    })
}