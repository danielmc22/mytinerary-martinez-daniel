const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({

    fullName:{ type:String, required:true },
    email:{ type:String, required:true },
    urlImage: { type: String, required:true },
    password:[{ type:String, required:true }], 
    from:{ type:Array },
    country: { type:String, required: false },
    uniqueString:{ type:String, required:true },
    emailVerificado:{ type:Boolean, required:true },
    
})

const User = mongoose.model('users', userSchema)
module.exports = User



 //"users" es el nombre d emi colección
