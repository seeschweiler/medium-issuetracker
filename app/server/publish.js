/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('issues', function (userId) {
  return Issues.find({createdBy: userId});
});
