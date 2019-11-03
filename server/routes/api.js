let express = require('express');
let router = express.Router();
let rooms = require('../models/room');

router.route('/rooms/:buildingNo')
.get(function(req, res, next){
    rooms.getAllRoomsByBuildingNo(req.params.buildingNo)
        .then((data)=>{
            if(data){
                res.json(data).status(200);
            }
        })
        .catch((err)=>{
            err.status = 500;
            next(err);
        })
})
.post( function(req, res, next){
    let userName = req.body.userName;
    let roomNo = req.body.roomNo;
    let buildingNo = req.params.buildingNo;
    let PAN = req.body.PAN;//13078924103947sdja';
    let aadhar = req.body.aadhar;//1204793568472;
    let address = req.body.address//'34, sri dhanalakshmi nagar, peelamedu, coimbatore-641015';
    
    let roomsModel = new rooms({
        userName,
        roomNo,
        buildingNo,
        PAN,
        aadhar,
        address,
        lastModified : Date.now(),
    });

    rooms.addNewRoom(roomsModel, function(err, data){
        if(err) {
            err.status = 500;
            next(err)
        } else{
            //console.log('data has been save', data);
            res.json(data).status(200);
        }
    });
})
.put((req, res, next)=>{
    let userName = req.body.userName;
    let roomNo = req.body.roomNo;
    let buildingNo = req.params.buildingNo;
    let PAN = req.body.PAN;//13078924103947sdja';
    let aadhar = req.body.aadhar;//1204793568472;
    let address = req.body.address//'34, sri dhanalakshmi nagar, peelamedu, coimbatore-641015';

    rooms.getAParticularRoom(buildingNo, roomNo, function(err, roomData){
        if(err){
            next(err);
        } else{
            roomData.userName = userName || roomData.userName;
            roomData.PAN = PAN || roomData.PAN;
            roomData.aadhar = aadhar || roomData.aadhar;
            roomData.address = address || roomData.address;
            roomData.lastModified = Date.now();

            rooms.addNewRoom(roomData, (err, data)=>{
                if(err) {
                    err.status = 500;
                    next(err)
                } else{
                    //console.log('data has been updated', data);
                    res.json(data).status(200);
                }
            })
        }
    })
})
.delete(function(req, res, next){
    let roomNo = req.query.roomNo;
    let buildingNo = req.params.buildingNo;
    
    rooms.deleteRoom(buildingNo, roomNo, function(err, data){
        if(err) {
            err.status = 500;
            next(err)
        } else{
            //console.log('data has been deleted', data);
            res.json(data).status(200);
        }
    })
});

router.get('/rooms', function(req, res){
    rooms.getAllRooms((err, data)=>{
        if(err) {
            err.status = 500;
            next(err)
        } else{
            //console.log('All Room data has been sent', data);
            res.json(data).status(200);
        }
    })
})

router.route('/room/:buildingNo')
.get((req, res, next)=>{
    rooms.getAParticularRoom(req.params.buildingNo, req.query.roomNo, function(err, data){
        if(data){
            res.json(data).status(200);
        } else{
            err.status = 500;
            next(err);
        }
    });
})

module.exports = router;