Meteor.methods({
	addPost: function(title, body) {
		// body...
		Posts.insert({
			title: title,
			body: body
		});
	},
	editPost: function(id, title, body){
		Posts.update({
			_id: id
		},{
			$set: {
				title: title,
				body: body
			}
		});
	},
	removePost: function(id){
		Posts.remove(id);
	},
	addProject: function(file, name, client, description, type, projectDate){
		if (file) {
			fsFile = new FS.File(file);
			ProjectImages.insert(fsFile, function(err, result){
				if (!err) {
					var projectImage = '/cfs/files/ProjectImages/' +result._id;

					Projects.insert({
						name: name,
						client: client,
						description: description,
						type: type,
						projectDate: projectDate,
						projectImage: projectImage
					});
				}
			});
		}else{
					Projects.insert({
						name:name,
						client:client,
						description:description,
						type:type,
						projectDate:projectDate
					});
				}
	},
	editProject: function(id, file, name, client, description, type, projectDate){
		if (file) {
			fsFile = new FS.File(file);
			ProjectImages.insert(fsFile , function(err, result){
				if (!err) {
					var projectImage = '/cfs/files/ProjectImages/' +result._id;
					//update

					Projects.update({
						_id: id
					},{
						$set:{
							name:name,
							client:client,
							description:description,
							type:type,
							projectDate:projectDate,
							projectImage:projectImage
						}
					});
				}
			});
		}else{
					Projects.update({
						_id:id
					},{
						$set:{
								name:name,
								client:client,
								description:description,
								type:type,
								projectDate:projectDate
							}
					});
				}
	},
	removeProject: function(id){
		Projects.remove(id);
	}
});