// Hook in to constellation UI

var Constellation = Package["babrahams:constellation"];
	
Constellation.API.addTab({
  name: 'Autopublish',
  headerContentTemplate: 'Constellation_autopublish',
  noOpen:true,
  onClick: "toggleAutopublish"
});

Constellation.API.registerCallbacks({
  toggleAutopublish : function () {
	Session.set('Constellation_autopublish', !Session.get('Constellation_autopublish'));
  }
});

Tracker.autorun(function () {
  if (Session.get('Constellation_autopublish')) {
	Meteor.subscribe('Constellation_autopublish'); 
  }
});

Template.Constellation_autopublish.helpers({
  autopublish: function () {
	return Session.get('Constellation_autopublish');  
  }
});