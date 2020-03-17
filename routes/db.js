//引入mongoose组件
var mongoose = require('mongoose');
//数据库名称为book，端口号27017,重点!mongodb://xxxxxx
mongoose.connect('mongodb://localhost:27017/book');

mongoose.connection.on('connected',function(){
	console.log('成功连接数据库');
});
mongoose.connection.on('error',function(){
	console.log('错误');
});

module.exports=mongoose;
