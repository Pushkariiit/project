const path = require('path');

const express = require('express');

const app = express();

const { json } = require("express");

const port = process.env.PORT || 3015;

require("./db/conn");

const staticpath = path.join(__dirname,"../public");

app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
});


app.get("/",(req,res)=>{
    res.send("hi");
});


app.listen(port,()=>{
    console.log(`server running at port no ${port}`);
})