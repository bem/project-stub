var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    serveStatic = require('serve-static'),
    morgan = require('morgan'),
    app = express(),

    rootDir = path.join(__dirname, '..'),
    portOrSocket = 8085;

var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('HELLO MFUCKERS');
});

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(morgan('combined'))
    .use(serveStatic(path.join(rootDir, 'desktop.bundles', 'index')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(require('cookie-parser')())
    .use(router)
    .use(function(req, res) {
        res.sendStatus(404);
    })
    .use(function(err, req, res, next) {
        console.error(err.stack);
        res.sendStatus(500);
    });

exports.start = function() {
    app
        .listen(portOrSocket, function() {
            console.info('app started on %s', portOrSocket);
            isNaN(portOrSocket) && fs.chmod(portOrSocket, '0777');
        })
        .once('error', function(err) {
            console.error('worker %s has failed to start application', process.pid);

            if (err.code === 'EADDRINUSE') {
                console.error('port or socket %s is taken', portOrSocket);
                process.kill();
                return;
            }

            console.log(err.stack);
        });
};

if (!module.parent) {
    if (fs.existsSync(portOrSocket)) {
        try {
            fs.unlinkSync(portOrSocket);
        } catch (e) {}
    }

    exports.start();
}
