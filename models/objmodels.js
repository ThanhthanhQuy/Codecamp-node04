let moogoose = require('mongoose');

const mongo_path= process.env.MONGO_PATH || 'localhost' ;
const mongo_port= process.env.MONGO_PORT || 27017;
let {Schema}= moogoose;



moogoose.connect(`mongodb://${mongo_path}:${mongo_port}/data`, /* từ phiên bản >= 3.0 */ { useNewUrlParser: true });



let schema= new Schema({
    title : {type:String, require: true, trim: true},
    created : {
        type: Date,
        default: Date.now
    }
})
module.exports=moogoose.model('Data', schema);
