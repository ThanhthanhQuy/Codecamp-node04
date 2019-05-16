let connect= require('../database');
mongoose= require('mongoose');

let {Schema}= mongoose ;
let schema= new Schema({
    name : {
        type:String,
        require: true,
        trim: true},
    user : {
       type: Schema.Types.ObjectId,
       ref: 'User' ,
      
    },
    completed: {
        type: Boolean,
        require: true},
    created : {
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('Category', schema);
