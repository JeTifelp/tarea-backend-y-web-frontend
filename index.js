const express = require('express');

const app= express();
const morgan=require('morgan');
//

const routeUsers= require('./src/routes/users');
//const otraRouta=
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true,limit:1024*1024*50,type:'application/x-www-form-urlencoded'}));//si me envian un formulario
app.use(morgan('dev'));
//routes
//app.use( require('./src/routes/route.js'));
app.use('/api/users',routeUsers);
//__
app.listen(3000);
console.log('Server on port 30000');