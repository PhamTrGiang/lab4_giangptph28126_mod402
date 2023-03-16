var express = require('express');
var app = express();

var expressHbs = require('express-handlebars');
app.engine('.hbs',expressHbs.engine());

app.set('view engine','.hbs');

app.get('',function(req,res){
    res.render('bai3');
});

app.listen(3000);
