let express =require('express');

let router= express.Router();

let func = require('./controller/objcontroller')
router.get('/', (req, res)=> {
    res.send('Hello, world!')
})
router.post('/register', func.create);
router.get('/register/:id', func.getbyID1);


router.post('/categories', func.createCatogery )
router.get('/categories', func.get )
router.get('/categories/:id', func.getbyID);
router.delete('/categories/:id', func.deleteById);
router.post('/categories/:id', func.updateById);


router.post('/todos', func.createTodo);
router.get('/todos/:id', func.getTodo);
router.post('/todos/:id/toogle', func.toggle);
router.delete('/todos/:id', func.deletetodo);
router.get('/categories/:id/todos', func.getCategory);

module.exports= router;

