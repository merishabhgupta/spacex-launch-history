var express = require('express');
var app = express()
app.use(express.static('./dist/ps-xt-assignment'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/ps-xt-assignment/'}
  );
  });

app.listen(process.env.PORT || 8080);
