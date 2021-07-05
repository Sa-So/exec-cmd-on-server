//import express from "express";
const express=require("express")
const app = express()
const bodyParser = require("body-parser");
const cp =require('child_process')

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended:true}));
//app.use(express.bodyParser);
//.text(), .json()
/*
app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + "/" + "styles.css");
  });
*/
app.get("/",function (req,res) {
    //res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname+"/calci.html")
    //res.sendFile(__dirname + "/index.css")
})
app.post("/",function(req,res) {
    //res.send("Thanks for posting")
    //console.log(req.body);
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    sum1=n1+n2;
    res.send("Sum = "+sum1)
})
app.listen(3000,function() {
    console.log("server started at port 3000");
});


app.get("/bmiCalc",function (req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post("/bmiCalc",function (req,res) {
    var weight=parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height);
    res.send("your bmi is "+bmi)
})

app.get("/music",(req,res)=>{
    res.sendFile(__dirname+ "/music.html")
})
app.post("/music",(req,res)=>{
    console.log("button is pressed");
    //var dataToSend;
    // spawn new child process to call the python script
    //const python = spawn('python', ['script1.py']);
    // collect data from script
    /*python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    */
   //cp.exec("ls -l")

   cp.exec('open "https://www.youtube.com/watch?v=rCoPr8UwRMc"', (err, stdout, stderr) => {
    console.log('#1. exec')
    console.log(stdout);
    });
})