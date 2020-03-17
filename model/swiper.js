var mongoose = require('../routes/db.js');

var swiperSchema = mongoose.Schema;

var swiper = new swiperSchema({
	swiperId:{
		type:Number
	},
    titleOne:{
    	type:String
    },
    titleTwo:{
    	type:String
    },
    titleThree:{
    	type:String
    },       
	imgurl:{
    	type:String
   },
})
module.exports=mongoose.model('swiper',swiper);
