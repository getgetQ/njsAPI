var DeliverService = require('../services/delivers.service')

_this = this


exports.getDelivers = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)

    try{
        var delivers = await DeliverService.getDelivers({}, page, limit)
        return res.status(200).json({status: 200, data: delivers, message: "Succesfully Delivery Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createDeliver = async function(req, res, next){
    var deliver = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try{
        var createdDeliver = await DeliverService.createDeliver(deliver)
        return res.status(201).json({status: 201, data: createdDeliver, message: "Succesfully Created Delivery"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Delivery Creation was Unsuccesfull"})
    }
}

exports.updateDeliver = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var deliver = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedDeliver = await DeliverService.updateDeliver(deliver)
        return res.status(200).json({status: 200, data: updatedDeliver, message: "Succesfully Updated Delivery"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeDeliver = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await DeliverService.deleteDeliver(id)
        return res.status(204).json({status:204, message: "Succesfully Delivery Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}