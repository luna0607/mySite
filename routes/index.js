var express = require('express');
var router = express.Router();

//如果收到get类型的‘/’请求，就渲染index
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//如果收到post类型的‘/’请求，就打印传送来的数据，并在本地console显示。
//同时，返回‘ok’
//res意为response,req意为request
router.post('/',function (req,res,next) {
    console.log(req.body);
    res.json('ok');
});
var http=require("http");

module.exports = router;
