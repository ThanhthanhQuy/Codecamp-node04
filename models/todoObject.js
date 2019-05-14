let connect= require('../database');
let mongoose= require('mongoose');
let {Schema}= mongoose;
let schema= new Schema({
    title : {type:String, require: true, trim: true},
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User' ,
       
     },
    categories: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Category' ,
    }],
    completed: {type: Boolean, require: true},
    created : {
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('Todo', schema);
