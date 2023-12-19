const con=require('./connection')
const mysql = require("mysql");
const express = require("express");
const path = require('path');
const app = express();
const static_path= path.join(__dirname,"../public");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(static_path));

app.set('view engine','ejs');

app.get('/header',function(req,res){
    res.render('header')
});

app.get('/footer',function(req,res){
    res.render('footer')
});

app.get('/',function(req,res){
    res.sendFile(static_path+'/index.html')
});
app.get('/about',function(req,res){
    res.render('aboutus')
});

app.get('/gallery',function(req,res){
    res.render('gallery')
});

app.get('/contact',function(req,res){
    res.render('contact')
});

app.get('/training',function(req,res){
    res.render('training')
});

app.get('/book',function(req,res){
    res.render('book')
});

app.get('/login',function(req,res){
    res.render('login')
});

app.get('/register',function(req,res){
    res.render('register')
});


app.post("/login", function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    con.query("select * from register where email = ? and password = ?",[email,password],function(error,results,fields){
        if (results.length > 0) {
            res.redirect("/index");
        } else {
            res.send("login successfully");
        }
        res.end();
    })
})

app.post('/register',function(req,res){
    var name= req.body.name;
    var mno=req.body.mno;
    var email=req.body.email;
    var password=req.body.password;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO register(name,mno,email,password) VALUES ('"+name+"','"+mno+"','"+email+"','"+password+"')";
        con.query(sql,function(error,result){
            if(error) throw error;
            res.send('register successfully');
        })
    })
})

app.listen(3000);