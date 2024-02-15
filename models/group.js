const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    userArray: {
        type: Array,
        required: true,
        default: []
    },
    chats: {
        type: Array,
        default: []
    }
});

const groupModel = mongoose.model('Group', groupSchema);

module.exports = groupModel;