const http = require('http');
const url = require('url');
const fs = require('fs');
const { accessLogFile, staticAccessLogFile } = require('./test-helper');

// mock response server
http.createServer((req, res) => {
  const path = req.url;
  res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
  fs.appendFileSync(accessLogFile, `${path}\n`);
  res.end('');
}).listen(8181);


// static file server
const static = require('node-static');
const staticServer = new static.Server('./', { cache: 0 });
http.createServer((req, res) => {
  req.addListener('end', () => {
    const path = req.url;

    if (path !== '/favicon.ico') {
      fs.appendFileSync(staticAccessLogFile, `${req.url}\n`);
    }
    staticServer.serve(req, res);
  }).resume();
}).listen(8080);
