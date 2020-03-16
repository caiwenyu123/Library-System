const express = require('express');
const router = express.Router();


//导入模型
const book = require('../model/book');
const swiper = require('../model/swiper');
const classes = require('../model/class');
const good = require('../model/good');
const notice = require('../model/notice');
/* GET home page. */
var cors = require('cors');
router.get('/',cors(),function(req,res,next){
	//轮播图swiper接口
  let p1= new Promise((resolve,reject)=>{
	  //这里的swiperData是接受的数据,可以自定义命名,
	  //function(a,b),a代表执行报错,一般用error表示,b是接收的数据
	  swiper.find({},function(err,swiperData){
		  //数据读取完毕之后,调用resolve
		  resolve(swiperData);
	  });
  });
  
  //分类classes接口
  let p2= new Promise((resolve,reject)=>{

  	  classes.find({},function(err,classData){
  		  //数据读取完毕之后,调用resolve
  		  resolve(classData);
  	  });
  });
  
  // 推荐good接口
  let p3 = new Promise((resolve,reject)=>{

  	  good.find({},function(err,goodData){
  		  //数据读取完毕之后,调用resolve
  		  resolve(goodData);
  	  });
  });
  //公告notice接口
  let p4 = new Promise((resolve,reject)=>{
  
  	  notice.find({},function(err,noticeData){
  		  //数据读取完毕之后,调用resolve
  		  resolve(noticeData);
  	  });
  });
  
  Promise.all([p1,p2,p3,p4]).then((result)=>{
	  
	  res.render('index',{data:result},
	  console.log(result)
	  );
  })	
});

  
  // 从data.json里直接读取文件返给前台
// router.get('/', function(req, res, next) {
//   //  读取json文件，返回给前台
//   console.log(data);
//   res.render('index', { data:data,
//   	title:'文煜的图书馆',
//   	swiper:data.swiper,
//   	mainRow:data.mainRow,
//   	tabrow:data.tabrow,
//   	row:data.row
//   });
// });


// var shuju = '';
// book.find({},function(error,data){
//
//   shuju = {
//     data:data
//   }
//			console.log(shuju);
// })
router.get('/list',cors(),function(req,res,next){
//	  console.log(req.query.page);
	book.find({},function(error,data){
		if(error){
			console.log(error);
		}else{
//			console.log(data);
			res.render('list',{data:data,number:3134});
		}
	}).skip((req.query.page-1)*10).limit(10);
	// .skip((req.query.page-1)*10).limit(10);
});
router.get('/list/book',cors(),function(req,res){
	book.find({},function(error,data){
		if(!error){
			res.send({
				data:data
			});
		}
	}).limit(15);
});
router.get('/addbook',cors(),function(req,res,next){
	console.log(req.query);
	book.create({
		bookid:req.query.bookid,
		bookname:req.query.bookname,
		author:req.query.author,
		tag:req.query.tag,
		introsition:req.query.introsition,
		imgurl:req.query.imgurl,
	    publish:req.query.publish,
	},function(error,data){
		if(error){
			console.log(error);
			res.send({
				success:false
			})
		}else{
			res.send({
				success:true
			});
		}
	})
});


router.get('/removebook',cors(),function(req,res,next){	
	book.remove({bookid:req.query.bookid},function(error,data){
//		console.log(data);
		if(error){
			console.log(error);
			res.send({
				success:false
			})
		}else{
			console.log(data);
			res.send({
				success:true
			});
		}
	})
});

router.get('/findbook',cors(),function(req,res,next){	
//	console.log(req.query.bookName);
	book.find({bookid:req.query.bookid},function(error,data){
		if(error){
			console.log(error);
		}else{	
			console.log(req);
//			res.render不行???
//			res.render('list',{data:data});
				res.send(data);			
		}
	})
});

router.get('/changebook',cors(),function(req,res,next){
	book.update({bookid:req.query.bookid},
	{ bookid:req.query.bookid,
	  bookname:req.query.bookname,
	  author:req.query.author,
	  tag:req.query.tag,
	  introsition:req.query.introsition,
	  imgurl:req.query.imgurl,
	  publish:req.query.publish,		
	},function(error,data){
	  console.log(req.query.bookId);
//	  console.log(req.query.bookName);
//	  console.log(res.query.publish);
	  if(error){
	  	console.log(error);
	  	res.send({
	  		success:false
	  	})
	  }else{
	  	res.send(data);
	  }
	})
})
module.exports = router;
