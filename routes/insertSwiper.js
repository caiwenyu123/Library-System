
//swiper.js模型文件
var swiper = require('../model/swiper');
//routes/book.json
var data = require('./data').swiper;

for(i=0;i<data.length;i++){
	swiper.create({
		swiperId:data[i].swiperId,
        titleOne:data[i].titleOne,
        titleTwo:data[i].titleTwo,
        titleThree:data[i].titleThree,
		imgurl:data[i].imgurl
	},function(error,data){	       
	})
}