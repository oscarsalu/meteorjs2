Posts = new Mongo.Collection('post');

Posts.attachSchema(new SimpleSchema ({
	title:{
		type: String,
		max: 100
	},
	body:{
		type: String
	},
	userId:{
		type:String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt:{
		type:Date,
		autoValue: function(){ return new Date() }
	}
}));

Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema ({
	name:{
		type: String,
		max: 100
	},
	description:{
		type: String
	},
	client:{
		type: String,
		max:100
	},
	type:{
		type:String,
		max:100
	},
	projectDate:{
		type:String,
		max:100,
		optional: true
	},
	userId:{
		type:String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt:{
		type:Date,
		autoValue: function(){ return new Date() }
	},
	projectImage:{
		type:String,
		max:100,
		optional:true
	}
}));

ProjectImages = new FS.Collection('ProjectImages', {
	stores:[new FS.Store.GridFS('ProjectImages')]
});

/*ProjectImages.deny({
	insert: function(){
		return false;
	},
	download: function(){
		return false;
	}
});
*/
ProjectImages.allow({
	insert: function(){
		return true;
	},
	download: function(){
		return true;
	},
	update: function(){
		return true;
	}
});