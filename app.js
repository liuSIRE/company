const express=require('express');
const bodyParser=require('body-parser');
const user=require('./routers/user.js');
const news=require('./routers/news.js');
const course=require('./routers/course.js');
const session = require('express-session');
var app=express();
app.listen(3000,()=>{
  console.log('web服务器构建成功');
});
app.use(express.static('./product'));
app.use(bodyParser.urlencoded({
extended: false
}));
app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
  }))
app.use('/user',user);
app.use('/news',news);
app.use('/cpurse',course);