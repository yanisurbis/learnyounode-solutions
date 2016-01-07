var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];
var timeFormat = '%F %R%n';

var server = net.createServer(function (socket) {
    socket.end(strftime(timeFormat, new Date()));
});
server.listen(port);
