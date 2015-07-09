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
    Session.set('Constellation_autopublish', !Session.get('Constellation_autopublish'));
  }
});

Tracker.autorun(function () {
  if (Session.get('Constellation_autopublish')) {
    var Contellation_config = Session.get("Constellation");
    Meteor.subscribe('Constellation_autopublish', Package["constellation:console"].Constellation.ConstellationDict.get('Constellation').collections); 
  }
});

Template.Constellation_autopublish.helpers({
  autopublish: function () {
    return Session.get('Constellation_autopublish');  
  }
});
	