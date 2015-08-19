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