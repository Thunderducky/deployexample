const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function(){
  console.log(`App listening on PORT: ${PORT}`)
});
