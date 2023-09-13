const express = require('express');
const app = express();
const port = 8000;

const Db = require('./config/mysql')
const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({extended: true}));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setup the static files
app.use(express.static('assets'))

// route
app.use('/', require('./routes'))

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in Connecting to Database, ${err}`);
        return;
    } else {
        console.log(`Server is Running on, ${port}`);
    }
})