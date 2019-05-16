let express =require('express');

let router= express.Router();

let register = require('./controller/object');
let category= require('./controller/category');
let todo= require('./controller/todo')


router.get('/', (req, res)=> {
    res.send('Hello, world!')
})
router.post('/register', register.create);
router.get('/register/:id', register.getbyID1);


router.post('/categories', category.createCatogery )
router.get('/categories', category.get )
router.get('/categories/:id', category.getbyID);
router.delete('/categories/:id', category.deleteById);
router.post('/categories/:id', category.updateById);


router.post('/todos', todo.createTodo);
router.get('/todos/:id', todo.getTodo);
router.post('/todos/:id/toogle', todo.toggle);
router.delete('/todos/:id', todo.deletetodo);
router.get('/categories/:id/todos', todo.getCategory);

module.exports= router;

