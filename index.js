let express= require('express');
let bodyparser = require('body-parser');
let port= process.env.PORT || 2000;
let app= express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


app.use(require('./routes'));

app.listen(port, (err)=>{
    if(err) {console.log(err);}
    console.log('Server is running......');
})