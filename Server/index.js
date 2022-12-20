const fetch = require('node-fetch');
const express = require('express')
const app = express();
const cors = require('cors');
 
const ports = 8080;

const data = require('./config');
const { allowedUrl } = require('./config');
const api = require("./api/api");
app.use(cors({origin:allowedUrl}));
app.use(express.json());
 
app.use("/api" , api);
 
app.listen(ports , ()=>{
  console.log('listening on port ' + ports);
})
 
module.exports = app;


 

/*
CREATE TABLE CUSTOMER (
  userId SERIAL PRIMARY KEY ,
  email varchar ,
  password varchar
)

*/
