// const mysql = require("mysql");
// const con=require('./connection')
// const express = require("express");
// const path = require('path');
// const bodyParser = require("body-parser");
// const encoder = bodyParser.urlencoded();
// const static_path= path.join(__dirname,"../public");
// const app = express();

// app.get('/login',function(req,res){
//     res.sendFile(static_path+'/login.html')
// });

// app.post("/login", function(req,res){
//     var email = req.body.email;
//     var password = req.body.password;

//     con.query("select * from register where email = ? and password = ?",[email,password],function(error,results,fields){
//         if (results.length > 0) {
//             res.redirect("/index");
//         } else {
//             res.redirect("/");
//         }
//         res.end();
//     })
// })

// // when login is success
// app.get("/index",function(req,res){
//     res.sendFile(static_path + "/index.html")
// })

// // set app port 
// app.listen(3000);