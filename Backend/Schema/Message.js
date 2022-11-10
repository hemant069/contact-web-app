const {Schema,model}=require('mongoose')

const MessageModal=new Schema({
  Message:String

})


const Message=model('message',MessageModal)

module.exports=Message