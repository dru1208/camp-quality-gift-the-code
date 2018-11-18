const http = require('http');
const fs = require('fs');
const PORT = 8080

// Loading the index file . html displayed to the client
const server = http.createServer()


const io = require('socket.io').listen(server);

io.on('connection', function (socket) {
  console.log('A client is connected!');
  if (socket.handshake.query.user == "admin_medical") {
    socket.join("admin_medical")
  } else if (socket.handshake.query.user == "parent") {
    socket.join("parent")
  } else {
    console.log("user type not known")
  }
});


server.listen(PORT);

console.log(`Listening on port ${PORT}`)


/*
io.to('some room').emit('some event');


To leave a channel you call leave in the same fashion as join.


edit

var socket = io.connect('/image/change', {query:"name=my_img_name"});
var siofu = new SocketIOFileUpload(socket);

siofu.listenOnInput(document.getElementById("change_image_inpt"));
On server side :

edit

io.of('/image/change')
  .on('connection', function (socket) {
  console.log('log input param : ' + socket.handshake.query.name);
});


1.0 and later:
Client Side:

//The query member of the options object is passed to the server on connection and parsed as a CGI style Querystring.
var socket = io("http://127.0.0.1:3000/", { query: "foo=bar" });



Server Side:

io.use(function(socket, next){
    console.log("Query: ", socket.handshake.query);
    // return the result of next() to accept the connection.
    if (socket.handshake.query.foo == "bar") {
        return next();
    }
    // call next() with an Error if you need to reject the connection.
    next(new Error('Authentication error'));
});
*/