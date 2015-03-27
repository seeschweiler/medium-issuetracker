Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/insert_issue', {
  name: 'insertIssue',
  controller: 'IssuesController',
  action: 'insert',
  where: 'client'
});


Router.route('issues_list', {
  name: 'issuesList',
  controller: 'IssuesController',
  action: 'list',
  where: 'client'
});

Router.route('/issue/:_id', {
  name: 'editIssue',
  controller: 'IssuesController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
     this.next();
  }
}, {only: ['issuesList', 'insertIssue']});
