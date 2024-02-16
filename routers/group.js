const get = require('../controllers/group/get');
const post = require('../controllers/group/post');
const join = require('../controllers/group/joinGroup');
const addChat = require('../controllers/group/addChat');

const group = async (request) => {
    if(request.endPoint === "get"){
        return await get(request.groupName);
    }
    if(request.endPoint === "post"){
        return await post(request.username, request.groupName);
    }
    if(request.endPoint === "join"){
        return await join(request.username, request.groupName);
    }
    if(request.endPoint === "addChat"){
        return await addChat(request.chat, groupName);
    }
}

module.exports = group;