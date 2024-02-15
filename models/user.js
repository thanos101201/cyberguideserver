const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    currentLocation : {
        type: Object
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;