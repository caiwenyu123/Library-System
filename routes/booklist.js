var express = require('express');
var router = express.Router();
var book = require('../model/book');
var cors = require('cors');

router.get('/',cors(),function(req,res,next){
	
	//
	var page = req.query.page;
	
	var search = req.query.search;
	
	var tag = req.query.tag;
	
	var _filter;
	
	if(search){
		var patte = new RegExp(search);
		_filter = {
			$or:[
				{bookname:patte},
			]
		}
	}else{
		var patte = new RegExp(tag),
		
		_filter = {
			$or:[
				//有一个条件满足就可以匹配到
				//bookname:/search/
				{tag:patte},
			]
		}
	}
	
	//p1是
	let p1 = new Promise((resolve,reject)=>{
		
		//查询图书总数
		book.count(_filter,function(error,data){
			resolve(data);
		});
	});
	
	let p2 = new Promise((resolve,reject)=>{
		book.find(_filter).limit(15).skip((page-1)*15).sort({"bookid":-1}).exec(function(error,data){
			resolve(data);
		})
	});
	
	Promise.all([p1,p2]).then((result)=>{
		res.render('booklist',{data:result});
	})
})


module.exports =router;