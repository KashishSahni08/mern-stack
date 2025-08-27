const express = require ('express');
const app = express();
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');
const cors = require('cors');
  
const port = 5000;

//middleware
app.use(cors({
   origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product',ProductRouter);
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