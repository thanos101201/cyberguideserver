const locationModel = require("../../models/location")

const addComment = async (coOrdinate, comment) => {
    return await locationModel.find({
        coOrdinate: coOrdinate
    }).then((resp1) => {
        if(resp1.length === 0){
            let error = {
                type: 'Error',
                message: 'Location not found'
            }
            return error;
        }
        let comments = resp1[0].comments;
        comments.push(comment);
        locationModel.updateOne({
            coOrdinate: coOrdinate
        }, {
            comments: comments
        }).then((resp2) => {
            let data = {
                type: 'data',
                message: er1.message
            }
            return data;
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

module.exports = addComment;