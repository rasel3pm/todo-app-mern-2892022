const mongoose=require('mongoose');


const toddSchema= mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    created:{
        type:Date,
        default: Date.now
    },
})

const Todo =mongoose.model("Todo", toddSchema);

module.exports=Todo