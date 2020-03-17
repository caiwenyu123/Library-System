//swiper.js模型文件
var good = require('../model/good');
//routes/book.json
var data = require('./data').good;

for(i=0;i<data.length;i++){
	good.create({
		goodId:data[i].goodId,
        title:data[i].title,
        author:data[i].author,
        introduction:data[i].introduction,
		imgurl:data[i].imgurl
	},function(error,data){	       
	})
}
