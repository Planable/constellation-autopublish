// Hook in to constellation UI

var Constellation = Package["constellation:console"].Constellation;
var API = Package["constellation:console"].API

API.addTab({
  name: 'Autopublish',
  headerContentTemplate: 'Constellation_autopublish',
  noOpen:true,
  onClick: "toggleAutopublish"
});

API.registerCallbacks({
  toggleAutopublish : function () {
	var ConstellationDict = Constellation.ConstellationDict;
	var autoPublishAll = ConstellationDict.get('Constellation_autopublish_all');
	ConstellationDict.set('Constellation_autopublish_all', !autoPublishAll);
    // If we're switching off autopublish, we need to reset the current collection index number to 0
    if (!ConstellationDict.get('Constellation_autopublish_all')) {
      var currentTab = API.getCurrentTab();
       if (currentTab && currentTab.type === 'collection') {
        var C = Constellation;
        C.ConstellationDict.set(C.sessKey(currentTab.id), 0);
      }
    }
  }
});

var autoPublishAll = function () {
  var ConstellationDict = Constellation.ConstellationDict;
  return ConstellationDict.get('Constellation_autopublish_all');
}

Tracker.autorun(function () {
  var TabStates = Constellation.TabStates;
  var ConstellationDict = Constellation.ConstellationDict;
  var ConstellationAutopublished = ConstellationDict.get('Constellation_autopublished') || [];
  var ConstellationNotAutopublished = ConstellationDict.get('Constellation_not_autopublished') || [];
  if (autoPublishAll() || (ConstellationAutopublished && ConstellationAutopublished.length)) {
	var allCollections = ConstellationDict && ConstellationDict.get('Constellation').collections && _.difference(ConstellationDict.get('Constellation').collections, ConstellationNotAutopublished) || [];
	var collections = (autoPublishAll()) ? allCollections : ConstellationAutopublished;
    Meteor.subscribe('Constellation_autopublish', _.filter(collections, function (collection) {
	  return TabStates.get(collection) && Constellation.Collection(collection) && !Constellation.collectionIsLocal(collection);
	})); 
  }
});

Template.Constellation_autopublish.helpers({
  autopublish: function () {
    return autoPublishAll();  
  }
});
	