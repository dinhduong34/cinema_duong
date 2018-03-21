var express = require("express");
var fileupload = require("express-fileupload");
var app = express();

var index = require('./routes/index');

app.use('/', index);

app.use(fileupload());

app.post('/upload', function (req, res) {
    if (!req.files)
        return res.status(400).send('No file were upload.');

    let image = req.files.image;

    image.mv('./upload', function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('file uploaded');

        // Uploaded files:
        console.log(req.files.image.name);

    });
});


app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));


