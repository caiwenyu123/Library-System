//swiper.js模型文件
var classes = require('../model/class');
//routes/book.json
var data = require('./data').class;

for(i=0;i<data.length;i++){
	classes.create({
		classId:data[i].classId,
        title:data[i].title,
        introduction:data[i].introduction,
	},function(error,data){	       
	})
}
