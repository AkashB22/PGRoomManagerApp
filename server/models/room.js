let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let RoomSchema = mongoose.Schema({
    userName : {
        type : String
    },
    roomNo : {
        type : Number,
    },
    buildingNo : {
        type : Number,
    },
    PAN : {
        type : String,
        unique : true
    },
    aadhar : {
        type : Number,
    },
    address : {
        type : String,
    },
    lastModified : {
        type : Date
    },
});
RoomSchema.index({roomNo : 1, buildingNo : 1}, { unique : true })

let roomsModel = module.exports = mongoose.model('Rooms', RoomSchema);

module.exports.addNewRoom = function(room, callback){
    room.save((err, data)=>{
        callback(err, data);
    });
}

module.exports.getAllRoomsByBuildingNo = function(buildingNo){
    return roomsModel.find({'buildingNo' : buildingNo})
        .then((data) =>{
            if(data){
                return(data);
            }
        })
        .catch((err)=>{
            return(err);
        })
}

module.exports.getAParticularRoom = function(buildingNo, roomNo, callback){
    roomsModel.findOne({'buildingNo' : buildingNo, 'roomNo' : roomNo}, function(err, data){
            callback(err, data);
    })
}

module.exports.deleteRoom = function(buildingNo, roomNo, callback){
    roomsModel.deleteOne({'buildingNo' : buildingNo, 'roomNo' : roomNo}, function(err, data){
            callback(err, data);
    })
}

module.exports.getAllRooms = function(callback){
    roomsModel.find({}, function(err, data){
            callback(err, data);
    })
}