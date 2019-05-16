let user = require('../models/objmodels');


//------------------------Register----------------------------

exports.create= async (req, res) => {
    let defaulttitle = {
        username: '',
        password:''
    }

    let {username}= Object.assign({}, defaulttitle, req.body) //merge vs req.body.title và default.title
// cần thiết
    if(!username) {
        return res.send({
            success:false,
            message: 'username is emty'
        })
    }
    let post= new user({username});
    post.save()
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

exports.getbyID1=async (req, res)=> {
    let {id}= req.params;
    await user.findOne({_id: id})
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