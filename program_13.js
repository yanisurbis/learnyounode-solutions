var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    if(req.method !== 'GET') res.end('Wrong methood.');

    var parsedUrl = url.parse(req.url, true);
    var pathname = parsedUrl.pathname;
    var date = new Date(parsedUrl.query.iso);
    var resultData;

    switch(pathname) {
        case '/api/parsetime': 
            resultData = JSON.stringify({
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds(),
            });
            break;

        case '/api/unixtime':
            resultData = JSON.stringify({
                "unixtime": date.getTime(),
            });
            break;

        default: 
            res.end('Wrong path.');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(resultData);
});
server.listen(port);
