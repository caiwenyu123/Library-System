var mongoose = require('../routes/db.js');

var goodSchema = mongoose.Schema;

var good = new goodSchema({
	goodId:{
		type:Number
	},
    title:{
    	type:String
    },
    author:{
    	type:String
    },
    introduction:{
    	type:String
    },       
	imgurl:{
    	type:String
   },
})
module.exports=mongoose.model('good',good);