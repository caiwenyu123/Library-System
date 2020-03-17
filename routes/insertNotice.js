//swiper.js模型文件
var notice = require('../model/notice');
//routes/book.json
var data = require('./data').notice;

for(i=0;i<data.length;i++){
	notice.create({
		noticeId:data[i].noticeId,
		titleTop:data[i].titleTop,
        title:data[i].title,
        content:data[i].content,
        titleBottom:data[i].titleBottom,
		imgurl:data[i].imgurl
	},function(error,data){	       
	})
}
