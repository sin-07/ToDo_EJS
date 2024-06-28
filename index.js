const express = require("express"); 
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("index")
})
app.get("/itsme/:username",function(req,res){
    res.send(`Hey this side ${req.params.username}`)
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});