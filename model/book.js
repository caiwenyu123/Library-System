var mongoose=require('../routes/db.js');

var bookSchema=mongoose.Schema;

var book= new bookSchema({
	bookid:{
		type:Number,
		unique:true
	},
	bookname:{
		type:String
	},
	author:{
		type:String
	},
	introsition:{
		type:String
	},
	tag:{
		type:String
	},
	publish:{
		type:String
	},
	imgurl:{
		type:String
	}
	
})

//  向外导出并且连接数据表
//'book'是导入的集合名，book是上面的var 的book
module.exports=mongoose.model('bookdatas',book);
