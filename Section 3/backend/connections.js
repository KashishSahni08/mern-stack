const mongoose = require('mongoose');

// asynchrouous function - promise object 
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    //console.log(result);
}).catch((err) => {
    console.log(err);
    
});

 module.exports = mongoose;