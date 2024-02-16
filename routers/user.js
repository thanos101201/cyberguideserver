const get = require('../controllers/user/get');
const post = require('../controllers/user/post');
const updateLocation = require('../controllers/user/updateLocation');
const deleteUser = require('../controllers/user/delete'); 

const user = async (request) => {
    if(request.endPoint === "get"){
        return await get(request.username);
    }
    if(request.endPoint === "post"){
        console.log('In the post');
        let data = await post( request.name, request.username, request.password)
        // console.log(data);
        return data;
    }
    if(request.endPoint === "location"){
        return await updateLocation(request.username, request.location);
    }
    if(request.endPoint === "delete"){
        return await deleteUser(request.username);
    }
}

module.exports = user;