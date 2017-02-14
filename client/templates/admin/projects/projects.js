Template.layout.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.add_project.events({
	'submit .add_project_form': function(event){
		// body...
		var name = event.target.name.value;
		var projectDate = event.target.projectDate.value;
		var client = event.target.client.value;
		var type = event.target.type.value;
		var description = event.target.description.value;
		

		var file = $('#projectImage').get(0).files[0];

		Meteor.call('addProject', file, name, client, description, type, projectDate);


				FlashMessages.sendSuccess("Project Added");

				Router.go('/admin/projects');

				return false;
	}
});
Template.edit_project.events({
	'submit .edit_project_form': function(event) {
		// body...
		var name = event.target.name.value;
		var client = event.target.client.value;
		var type = event.target.type.value;
		var description = event.target.description.value;
		var projectDate = event.target.projectDate.value;

		var file = $('#projectImage').get(0).files[0];

		Meteor.call('editProject',this._id, file, name, client, description, type, projectDate);

				FlashMessages.sendSuccess("Project Updated");

				Router.go('/admin/projects');

				return false;
	}
});

Template.list_project.events({
	'click .delete_project':function(event){
		if (confirm("Are you Sure?")) {
			Meteor.call('removeProject', this._id);

			FlashMessages.sendSuccess("Project is deleted");

			return false;
		}
	}
});
