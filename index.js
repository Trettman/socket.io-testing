var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/draw.html");    
});

io.on("connection", function(socket){
    socket.on("line", function(data){
        socket.broadcast.emit("line", data);
    });
});

http.listen(3000, function(){
    console.log("Listening on *: 3000");
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
