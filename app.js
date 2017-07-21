var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login',function (req,res,next) {
    var username=req.body.username;
    var password=req.body.password;
    if(username==="admin"&&password==="123456"){
        res.json([true,username]);
    }else {
        res.json([false,username]);

    }
});
    var cache=require('memory-cache');
    cache.put('one','key-cache1成功');
    cache.put('two','key-cache2成功');
    console.log(cache.get('one'));
    console.log(cache.get('two'));

    var cache1=require('memory-cache').Cache;
    var o=new cache1;
    var t=new cache1;
    o.put('1','new cache1成功');
    t.put('2','new cache2成功');
    console.log(o.get('1'));
    console.log(t.get('2'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:'error'});
});
var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

module.exports = app;
