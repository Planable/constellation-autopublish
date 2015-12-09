Meteor.publish('Constellation_autopublish', function (collectionNames) {
  check(collectionNames, [String]);
  return _.reduce(collectionNames, function (memo, collectionName) {
    var collection = Package["constellation:console"].Constellation.Collection(collectionName);
    if (collectionName && collection) {
      memo.push(collection.find());
    }
    return memo;
  },[]);
});