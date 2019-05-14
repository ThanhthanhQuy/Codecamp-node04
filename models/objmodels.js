let connect= require('../database');
let mongoose= require('mongoose');
let {Schema}= mongoose;
let schema= new Schema({
    username : {type:String, require: true, trim: true},
    created : {
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('User', schema);
