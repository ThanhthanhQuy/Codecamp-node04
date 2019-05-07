let express =require('express');

let router= express.Router();

let func = require('./controller/objcontroller')
router.get('/', (req, res)=> {
    res.send('Hello, world!')
})
router.post('/todos', func.create);
router.get('/todos/:id', func.getbyID);
router.delete('/todos/:id', func.deleteById);
router.post('/todos/:id', func.updateById);
module.exports= router;

