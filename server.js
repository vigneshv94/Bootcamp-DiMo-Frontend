const express = require('express');
const path = require('path');

const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};


app.use(allowCrossDomain);
// Serve only the static files form the dist directory
app.use(express.static('./dist/movieBash'));

app.get('*', function(req,res) {
    
    res.status(200).sendFile(__dirname + '/dist/movieBash/index.html');
    
// res.sendFile(path.join(__dirname,'/dist/movieBash/index.html'));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080)
