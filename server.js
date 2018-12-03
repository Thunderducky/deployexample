const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());
let nextId = 0;

const tables = [
  {
    id: 1,
    some:"data"}
];
const waitinglist = [];

app.post("/api/data", function(req, res){
  const table = req.body;
  table.id = nextId;
  if(tables.length < 5){
    tables.push(table);
  } else {
    waitinglist.push(table);
  }

  nextId++;
  res.json(req.body);
})

app.get("/api/data", function(req, res){
  res.json({tables, waitinglist});
})


app.post("/api/clear",  authorize, function(req, res){
  tables.length = 0;
  waitinglist.length = 0;
})

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function(){
  console.log(`App listening on PORT: ${PORT}`)
});
