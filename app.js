const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');

//middlewares
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoDB conection and routes
const api=require('./routes/api');
app.use('/api',api);

const port=4000;
app.listen(port,()=>{
    console.log("listening in port 4000");
});

