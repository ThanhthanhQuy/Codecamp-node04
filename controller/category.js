
let user = require('../models/objmodels');
let catogery= require('../models/Cateobjmodels');


//-----------------------------Catogery----------------------------------


exports.createCatogery= async (req, res) => {
    let newCatogery
    username= req.body.username;
    console.log(username)
    let defaulttitle = {
        name:'',
    }

    let {name}= Object.assign({}, defaulttitle, req.body) //merge vs req.body.title và default.title

    if(!name) {
        return res.send({
            success:false,
            message: 'name is emty'
        })
    }
    // tìm object đc truyền đã có hay chưa
    await user.findOne({username: username})
        .then((doc)=>{
            console.log("Đã có")
            newCatogery= new catogery ({
                name: name,
                user: doc._id,
                completed: true
            });
        })
        .catch((err)=> {
            return res.send({
                success:false,
                message: 'user is emty'
            })
        })


    newCatogery.save()
        .then((doc)=> {
            return res.send({
                data: doc.toJSON(),
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
    await catogery.findOne({_id: id})
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
exports.get=async (req, res)=> {
    await catogery.find()
        .then((doc)=>{
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

exports.getbyID=async (req, res)=> {
    let {id}= req.params;
    await catogery.findOne({_id: id})
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

exports.deleteById =async ( req, res) => {
    let {id}= req.params;
    await catogery.findOne({_id:id})
        .then(async (doc)=>{
            await catogery.deleteOne({_id:id})
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

exports.updateById = ( req, res) => {
    let {id}= req.params;
    let {name}= req.body;
    if(!name) {
        return res.send({
            success: false,
            message: 'Name is emty'
        })
    }
    catogery.findOne({_id:id})
        .then(async (doc)=>{
            await catogery.updateOne({_id:id},  {$set: {name}}) // find xong mới update cần theo cơ chế đồng bộ
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

};
