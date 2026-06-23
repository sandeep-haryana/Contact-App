import mongoose from "mongoose"

const contactModels= mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    action:{
        type:String
    },
    address:{
        type:String
    }
},{timestamps:true})


const Contact= mongoose.model('Contact',contactModels)
export default Contact