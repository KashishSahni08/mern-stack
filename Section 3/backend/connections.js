const mongoose = require('mongoose');

const url = 'mongodb+srv://kashishsahni08:kashishss@cluster0.q65muqe.mongodb.net/mydb1100?retryWrites=true&w=majority&appName=Cluster0'

// asynchrouous function - promise object 
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    //console.log(result);
}).catch((err) => {
    console.log(err);
    
});

 module.exports = mongoose;