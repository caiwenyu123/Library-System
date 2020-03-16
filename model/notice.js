var mongoose=require('../routes/db.js');

var noticeSchema=mongoose.Schema;

var notice= new noticeSchema({
	noticeId:{
		type:Number,
		unique:true
	},
	titleTop:{
		type:String
	},
	title:{
		type:String
	},
	content:{
		type:String
	},
	titleBottom:{
		type:String
	},
	imgurl:{
		type:String
	}
	
})

module.exports=mongoose.model('notice',notice);
