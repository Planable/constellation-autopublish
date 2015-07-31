Package.describe({
  name: 'constellation:autopublish',
  version: '0.3.2',
  summary: 'Autopublish toggle plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-autopublish.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');

  api.use(['templating','reactive-dict','tracker'], 'client');
  api.use(['underscore'], 'server');
  api.use('constellation:console@1.2.1', 'client');
  api.use('dburles:mongo-collection-instances@0.3.4', 'server');

  api.addFiles('autopublish.html','client');
  api.addFiles('autopublish-client.js','client');
  api.addFiles('autopublish-server.js','server');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
