const formidable = require('formidable');
const http = require('http');

http.createServer((req, res) => {
    if (req.url == '/upload' && req.method == 'POST') {
        let form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify({fields, files}));
        });
        return;
    }

    // server the upload file form
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(`<form action="/upload" enctype="multipart/form-data" method="POST">
                <input type="text" name="title">
                <input type="file" name="upload" multiple="multiple">
                <input type="submit" value="Upload">
            </form>`);
}).listen(5000);
