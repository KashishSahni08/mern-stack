const { Schema,model } = require('../connections');


const mySchema = new Schema({
    name :{type: String, unique: true, require:true},
    email : {type: String, require: true, unique: true},
    city : {type: String, default: 'Lucknow'},
    password : {type: String, require: true },
    createdAt : {type:Date, default: Date.now}
});

module.exports = model('users2', mySchema);