var express = require('express');
var router = express.Router();
var swiper = require('../model/swiper');
var good = require('../model/good');
var classes = require('../model/class');
var notice = require('../model/notice');

var cors = require('cors');

router.get('/',cors(),function(req,res){
	//推送routes下的admin.ejs
	res.render('admin');
});

//主页轮播图的数据接口
router.get('/swiper',cors(),function(req,res){
	swiper.find({},function(error,data){
		if(!error){
			res.send({
				data:data
			});
		}
	});
});

router.get('/updateSwiper',cors(),function(req,res){
	console.log(req);
	swiper.update({swiperId:req.query.swiperId},req.query,function(error,data){
		if(!error){
			res.send({
				success:'ok'
			});
			
		}
	});
});

router.get('/good',cors(),function(req,res){
	// console.log(req);
	good.find({},function(error,data){
		if(!error){
			res.send({
				data:data
			});
		}
	});
});

router.get('/removeGood',cors(),function(req,res){
	// console.log(req);
	good.remove({_id:req.query._id},function(error,data){
		if(!error){
			res.send({
				success:'ok'
				// data:data
			});
		}
	});
});

router.get('/updateGood',cors(),function(req,res){
	console.log(req);
	good.update({goodId:req.query.goodId},req.query,function(error,data){
		if(!error){
			res.send({
				success:'ok'
			});			
		}
	});
});

router.get('/classes',cors(),function(req,res){
	console.log(req)
	classes.find({},function(error,data){
		if(!error){
			res.send({
				data:data
			});
		}
	});
	
});

router.get('/updateClass',cors(),function(req,res){
	console.log(req);
	classes.update({classId:req.query.classId},req.query,function(error,data){
		if(!error){
			res.send({
				success:'ok'
			});
			
		}
	});
});

router.get('/notice',cors(),function(req,res){
	console.log(req)
	notice.find({},function(error,data){
		if(!error){
			res.send({
				data:data
			});
		}
	});
	
});

router.get('/updateNotice',cors(),function(req,res){
	console.log(req);
	notice.update({noticeId:req.query.noticeId},req.query,function(error,data){
		if(!error){
			res.send({
				success:'ok'
			});
			
		}
	});
});
module.exports = router;