var Deliver = require('../models/deliver.model')

_this = this


exports.getDelivers = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var delivers = await Deliver.paginate(query, options)
        return delivers;
    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

exports.createDeliver = async function(deliver){

    var newDeliver = new  Deliver({
        title: deliver.title,
        description: deliver.description,
        date: new Date(),
        status: deliver.status
    })

    try{
        var savedDeliver = await newDeliver.save()
        return savedDeliver;
    }catch(e){
        throw Error("Error while Creating Todo")
    }
}

exports.updateDeliver = async function(deliver){
    var id = deliver.id

    try{
        var oldDeliver = await Deliver.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    if(!oldDeliver){
        return false;
    }

    console.log(oldDeliver)

    oldDeliver.title = deliver.title
    oldDeliver.description = deliver.description
    oldDeliver.status = deliver.status


    console.log(oldDeliver)

    try{
        var savedDeliver = await oldDeliver.save()
        return savedDeliver;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deleteDeliver = async function(id){
    
    try{
        var deleted = await Deliver.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}