const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    coOrdinates: {
        type: Object,
        required: true
    },
    comments: {
        type: Array,
        default: []
    },
    visitors: {
        type: Array,
        default: []
    }
});

const locationModel = mongoose.model('Location', locationSchema);

module.exports = locationModel;