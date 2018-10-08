var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser());
app.use(cors());

app.set('views', path.join(__dirname , "./views"));

app.set('view engine' , 'ejs');

app.get('/',(req , res) => {
    res.render('index' , {
        people : [
            {name : 'Dave'},
            {name : 'Jerry'}
        ]
    });
});

app.listen(8080 , ()=>{console.log("Server listening on PORT 8080")});