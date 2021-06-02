const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const cors = require('cors');
const Route = require('./src/route')

app.use(fileUpload());
app.use(morgan('combined'));
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



Route(app);

app.listen(5050,()=>{
    console.log('Server is listening on 5050');
})