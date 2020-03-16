var mongoose = require('../routes/db.js');

var classSchema = mongoose.Schema;

var classes = new classSchema({
	classId:{
		type:Number
	},
    title:{
    	type:String
    },
    introduction:{
    	type:String
    }       
})
module.exports=mongoose.model('class',classes);