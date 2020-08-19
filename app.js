var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');


var app = express();

//Template enginee: js코드를 HTML내에서 실행시킬 수 있음
//nunjucks는 jinja2 와 문법이 같아서 사용
var nunjucks = require('nunjucks');

// view engine setup
// set이란 환경설정이며 configure("config_name", value)를 실행
// configure란 config_name과 value를 매칭시켜봄
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');
nunjucks.configure('views', {
  express: app, 
  watch: true
})


// use란 실행하겠다는 뜻, logger란 적용이란 뜻
app.use(logger('dev'));

// HTTP Body로 데이터가 전송 되면
app.use(express.json());  // json 양식을 사용한다. (json => object)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// app을 딴데서 호출할 수 있도록 하겠다.
module.exports = app;
