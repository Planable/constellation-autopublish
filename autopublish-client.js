// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;
    
Constellation.addTab({
  name: 'Autopublish',
  headerContentTemplate: 'Constellation_autopublish',
  noOpen:true,
  onClick: "toggleAutopublish"
});

Constellation.registerCallbacks({
  toggleAutopublish : function () {
    AutopublishDict.set('Constellation_autopublish', !AutopublishDict.get('Constellation_autopublish'));
  }
});

var AutopublishDict = new ReactiveDict('constellation-autopublish');

Tracker.autorun(function () {
  if (AutopublishDict.get('Constellation_autopublish')) {
    Meteor.subscribe('Constellation_autopublish', Package["constellation:console"].Constellation.ConstellationDict.get('Constellation').collections); 
  }
});

Template.Constellation_autopublish.helpers({
  autopublish: function () {
    return AutopublishDict.get('Constellation_autopublish');  
  }
});
	