const http = require('http');
const path = require('path');
const fs = require('fs');

const file = `${__dirname}/Octocat.png`;

http.createServer((req, res) => {
    let filename = path.basename(file);

    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'image/png');

    let filestream = fs.createReadStream(file);
    filestream.pipe(res);
}).listen(5050);
