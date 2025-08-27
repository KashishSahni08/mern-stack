const { Schema,model } = require('../connections');


const mySchema = new Schema({
    name :{type: String, unique: true, require:true},
    price : {type: Number, require: true, min:1}, 
    category : {type: String, require: true },
    stock : {type:Number, default:0},
    createdAt : {type:Date, default: Date.now}

});

module.exports = model('product2', mySchema);