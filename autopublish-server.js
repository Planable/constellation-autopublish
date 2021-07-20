Meteor.publish('Constellation_autopublish', function (collectionNames) {
  check(collectionNames, [String]);
  var cursorsPublished = [];
  return _.reduce(collectionNames, function (memo, collectionName) {
    var collection =
      Package["planable:console"].Constellation.Collection(collectionName);
    if (collectionName && collection && !_.contains(cursorsPublished, collectionName)) {
      memo.push(collection.find());
	  cursorsPublished.push(collectionName);
    }
    return memo;
  },[]);
});