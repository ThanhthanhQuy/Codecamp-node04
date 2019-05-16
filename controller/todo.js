let user = require('../models/objmodels');
let catogery= require('../models/Cateobjmodels');
let todo = require('../models/todoObject');




//-----------------------------TodoOBJ---------------------------------------


exports.createTodo= async (req, res) => {
    let newtodo, catogerylist=[];
    username= req.body.username;
    let defaulttitle = {
        name:'',
        title:'',
    }

    let {title}= Object.assign({}, defaulttitle, req.body) //merge vs req.body.title và default.title


    if(!title) {
        return res.send({
            success:false,
            message: 'Title is emty'
        })
    }
    // tìm object đc truyền đã có hay chưa
    await user.findOne({username: username})
        .then(async(doc)=>{
            newtodo= new todo ({
                title: title,
                user: doc._id,
                completed: true
            });
            await  catogery.find()
                .then(docs=> {
                    for(var i=0;i< docs.length; i++) {
                        if(String(docs[i].user._id) == String(doc._id) ) {
                            newtodo.categories.push(docs[i]._id);
                        }

                    }

                })
            console.log(catogerylist.valueOf())


        })
        .catch((err)=> {
            return res.send({
                success:false,
                message: 'user is emty'

            })

        })
    newtodo.save()
        .then((doc2)=> {
            return res.send({
                data: doc2.toJSON(),
                success: true
            })
        })
        .catch((err) => {
            return res.send ( {
                success:false,
                error:err.message
            })
        })
}
exports.getTodo= async (req, res) => {
    let {id}= req.params;
    await todo.findOne({_id: id})
        .then((doc)=>{
            res.send({
                success: true,
                data: doc
            })
        })
        .catch((err)=> {
            res.send({
                success: false,
                message: 'Dont found'

            })
        })
}
exports.toggle= async (req, res) => {
    let {id}= req.params;
    todo.findOne({_id:id})
        .then(async (doc)=>{
            var {completed}=doc;
            await todo.updateOne({_id:id},  {$set:  {completed: ! completed}}) // find xong mới update cần theo cơ chế đồng bộ
            res.send({
                success: true,
                data: true
            })
        })
        .catch((err)=> {
            res.send({
                success: false,
                message: err.message

            })
        })
}
exports.deletetodo =async ( req, res) => {
    let {id}= req.params;
    await todo.findOne({_id:id})
        .then(async (doc)=>{
            await todo.deleteOne({_id:id})
            res.send({
                success: true,
                data: true
            })
        })
        .catch((err)=> {
            res.send({
                success: false,
                message: 'Dont found'

            })
        })

};

exports.getCategory= async ( req, res) => {
    let {id}= req.params;
    await todo.find({
        categories: {$elemMatch: {$eq : id}}
    })
        .then(async(doc)=>{
            res.send({
                success: true,
                data: doc
            })
        })
        .catch((err)=> {
            res.send({
                success: false,
                message: 'Dont have'

            })
        })
}

