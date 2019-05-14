let moogoose = require('mongoose');

const mongo_path= process.env.MONGO_PATH || 'localhost' ;
const mongo_port= process.env.MONGO_PORT || 27017;




moogoose.connect(`mongodb://${mongo_path}:${mongo_port}/data`, /* từ phiên bản >= 3.0 */ { useNewUrlParser: true });