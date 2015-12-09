Package.describe({
  name: 'constellation:autopublish',
  version: '0.3.9',
  summary: 'Autopublish toggle plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-autopublish.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['templating','tracker'], 'client');
  api.use('check','server');
  api.use('underscore');
  api.use('constellation:console@1.3.1', 'client');
  api.use('dburles:mongo-collection-instances@0.3.4', 'server');

  api.addFiles('autopublish.html','client');
  api.addFiles('autopublish-client.js','client');
  api.addFiles('autopublish-server.js','server');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
