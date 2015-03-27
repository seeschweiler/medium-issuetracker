IssuesController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('issues', Meteor.userId());
  },

  data: function () {
    return Issues.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertIssue', {});
  },

  list: function() {
    this.render('IssuesList', {});
  },

  edit: function() {
    this.render('EditIssue', {});
  }
});
