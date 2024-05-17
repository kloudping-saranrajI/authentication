const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    password:String,
    email:String
})

const model=mongoose.model('register',schema)

module.exports=model