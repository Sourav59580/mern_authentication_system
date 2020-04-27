const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


//Database config
const db = require('./config/key').mongoURI;

//Database connection
mongoose
.connect(db,{useNewUrlParser : true, useUnifiedTopology : true})
.then(()=>console.log('mongoDB is connected.....'))
.catch(err => console.log(err))

//body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

//Routes config
const routes = require('./routes/api/Item')

//routes
app.use("/api",routes);





//server connection 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`));