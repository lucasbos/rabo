const http = require('http');
var fs = require('file-system');
var index = fs.readFileSync('./index.html');
var users = fs.readFileSync('./script.js');

http.createServer(function (req, res) {
    let status = 404;
    let contentType = '';
    let content = '';

    if (req.url === '/') {
        status = 200;
        contentType = 'text/html';
        content = index;
    } else if (req.url === '/script.js') {
        status = 200;
        contentType = 'text/javascript';
        content = users;
    } else if (req.url === '/users') {
        status = 200;
        contentType = 'application/json';
        content = JSON.stringify(
            ['Thomas', 'Duane', 'Moses', 'Leonard', 'Belinda', 'Kendrick', 'Debra', 'Ryan', 'Nikolas', 'Eugene']
        );
    }

    res.writeHead(status, {'Content-Type': contentType});
    res.end(content);
  }).listen(1234);