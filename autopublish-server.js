Meteor.publish('Constellation_autopublish', function () {
  return _.map(Meteor.Collection.getAll(), function (collection) {
	return collection.instance.find(); 
  });
});