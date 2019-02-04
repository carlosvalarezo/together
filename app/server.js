const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to  MongoDB
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('mongo db connected'))
        .catch(error => console.log(error));

const port = process.env.PORT || 5000;
 
app.listen(port, ()=>console.log(`server ready on port ${port}`));