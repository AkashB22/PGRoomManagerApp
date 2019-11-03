let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let path = require('path');
let cors = require('cors')
mongoose.connect('mongodb://localhost:27017/PgRoomManager', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true});
let db = mongoose.connection;
db.on('error', function(err){
    console.log('Error occured on mongoose connection')
});
db.on('connect', function(){
    console.log('success on mongoose connection')
});
//routes
let api = require('./routes/api')

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    next();
})

app.use('/api', api);

app.use(function(err, req, res, next){
    res.json({
        errorMessage : err.message
    });
})

app.listen(3000, ()=> console.log('server running on port 3000'));
