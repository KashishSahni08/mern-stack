const express = require ('express');
const app = express();
const UserRouter = require('./routers/UserRouter');
  
const port = 5000;

//middleware

app.use('/user', UserRouter);

//endpoint
app.get('/',(req, res) => {
   res.send('response from express');
});

//endpoint
app.get('/add',(req, res) => {
   res.send('response from add');
});
//getcall
app.get('/getcall',(req, res) => {
   res.send('response from getcall');
});

//delete
app.get('/delete',(req, res) => {
   res.send('response from delete');
});




// starting the server
app.listen(port,() => {
    console.log('server started');
    
});