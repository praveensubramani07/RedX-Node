const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const serverless = require("serverless-http");

//middlewares
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoDB conection and routes
const api=require('./routes/api');
app.use('/api',api);


module.exports = app;
module.exports.handler = serverless(app);
/*
const port=4000;
app.listen(port,()=>{
    console.log("listening in port 4000");
});
*/
