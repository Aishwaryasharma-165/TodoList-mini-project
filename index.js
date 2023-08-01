const express=require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + '/date.js')

const app=express();
const port=3000; 
const workitem=["Wake up !!"];
const items = ["Wake up !!"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", (req, res) => {
    const day = date.getDate();
res.render("index.ejs",{listTitle: day, newlistitem:items});
});
app.get("/work",(req,res) => {
    res.render("work.ejs",{listTitle: 'Work List',newlistitem:workitem});
});

app.post("/",(req, res) => {
 let item=req.body.allItems;
    items.push(item)
    res.redirect('/')
});
app.post("/work",(req, res) => {
  let item=req.body.allItems;
     workitem.push(item)
  res.redirect('/work')
 });
app.listen(port,()=>{
    console.log("server is started on port ${port}.");
})

