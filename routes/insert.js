//book.js模型文件
var book = require('../model/book');
//routes/book.json
var data = require('./book').data;

for(i=0;i<data.length;i++){
	book.create({
		bookId:i,
		bookName:data[i].books,
		tag:data[i].classify,
		author:data[i].author,
		publish:data[i].publish,
		brief:data[i].brief,
		imgurl:'https://w.wallhaven.cc/full/0w/wallhaven-0w3xw6.jpg'
	},function(error,data){	
		
        
        
        
        
        
        
        
        
        
	})
}
