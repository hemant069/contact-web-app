const {Schema,model}=require('mongoose')

const fakecontactmodal=new Schema({
    first_name:String,
    last_name:String,
    phone_number:Number

})


const contact=model('fakecontact',fakecontactmodal)

module.exports=contact