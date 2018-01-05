var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
app.get('/',function(req,res){
  res.send('hello world')
})
app.get('/user',function(req,res){
  res.send('去你大爷的')
})
app.post('/',function(req,res){
 res.send('got a Put request at /user')
})

app.put('/user',function(re1,res){
  res.send('Got a PUT request at /user')
})
app.delete('/emily',function(req,res){
  res.send('Got delete from /emily')
})