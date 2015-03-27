Template.EditIssue.events({
});

Template.EditIssue.helpers({
  beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete issue: "' + doc.title + '"?')) {
          this.remove();
          Router.go('issuesList');
        }
      };
    }
});

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('issuesList');
  }
});
