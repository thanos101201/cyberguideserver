const addComment = require('../controllers/location/addComment');
const addVisitor = require('../controllers/location/addVisitors');
const getLocation = require('../controllers/location/getLocation');

const location = async (request) => {
    if(request.endPoint === "comment"){
        return await addComment(request.coOrdinate, request.comment);
    }
    if(request.endPoint === "visitor"){
        return await addVisitor(request.coOrdinate, request.username);
    }
    if(request.endPoint === "get"){
        return await getLocation(request.coOrdinate);
    }
}

module.exports = location;