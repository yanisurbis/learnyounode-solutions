var EventEmitter = require('events');
var http = require('http');

var urls = process.argv.slice(2);
var dataObserver = new EventEmitter();
var stack = [];
var i = 0;

var operateOnData = function (index, data) {
    if (i == index) {
        console.log(data);
        i += 1;
        if(stack[i]) {
            operateOnData(i, stack[i]);
        }
    } else {
        stack[index] = data;
    }
};

var httpGet = function (url, index) {
    http.get(url, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            dataObserver.emit('dataWasLoaded', index, data);
        });
    });
};

dataObserver.on('dataWasLoaded', operateOnData);
urls.forEach(httpGet);
